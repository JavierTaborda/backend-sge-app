import { BadRequestException, Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { throwError } from 'rxjs';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { DateUtils } from 'src/utils/date.utils';
import { getVzlaDateForDB } from 'src/utils/date.venezuela.db';
import GoalsService from '../goals/goals.service';
import { CondicionDto } from './dtos/condicion.dto';
import { IVADto } from './dtos/iva.dto';
import { PedidoDTO } from './dtos/pedido.dto';
import { TasaDto } from './dtos/tasa.dto';
@Injectable()
export class CreateOrdersService {
    constructor(
        private readonly sql: SQLServerPrismaService,
        private readonly mysql: MySQLPrismaService,
        private readonly goalsService: GoalsService
    ) { }

    async GetProductsOrders(codven?: string) {
   
        //Update Goals
       
        const codVen = codven!= "N/A" ? codven : undefined
    
        const dataGoals = await this.goalsService.DataGoals(codVen);
  
        const isUpdate = await this.goalsService.updateGoals(dataGoals)

        //get Goals 
        const year = DateUtils.GetYear();
        const month = DateUtils.GetMonthMM();

        const metas = await this.mysql.metas.findMany({
            where:
            {
                anio: year,
                mes: month,
                asignado: { gt: 0 },
                ...(codVen ? { codven } : {}),

            },
        });
        const available = metas.filter(
            (m) => m.asignado - m.utilizado > 0
        );

        // get info
        const codarts = available.map((m) => m.codart);
        const arts = await this.sql.art.findMany({
            select: {
                co_art: true,
                art_des: true,
                prec_vta1: true,
                prec_vta2: true,
                cos_pro_un: true,
                ult_cos_un: true,
                ult_cos_om: true,
                cos_pro_om: true,
                tipo_imp: true,
                co_cat: true,
                cat_art: {
                    select: {
                        cat_des: true,
                    }
                }


            },
            where: { co_art: { in: codarts } },
        });


        
        const groupedData = available.reduce((acc, m) => {
            //  codven is undefined, group by codart 
            // codven, group by key 
            const key = codVen ? `${m.codven}-${m.codart}` : m.codart;

            if (!acc[key]) {
                const art = arts.find((a) => a.co_art.trim() === m.codart.trim());
                acc[key] = {
                    codven: codVen ? m.codven : "TODOS",
                    codart: m.codart,
                    artdes: art?.art_des?.trimEnd() ?? '',
                    asignado: 0,
                    utilizado: 0,
                    price: art?.prec_vta1,
                    price2: art?.prec_vta2,
                    cos_pro_un: art?.cos_pro_un ?? 0,
                    ult_cos_un: art?.ult_cos_un ?? 0,
                    ult_cos_om: art?.ult_cos_om ?? 0,
                    cos_pro_om: art?.cos_pro_om ?? 0,
                    tip_imp: art?.tipo_imp,
                    co_cat: art?.co_cat,
                    cat_art: {
                        cat_des: art?.cat_art?.cat_des?.trimEnd()
                    }
                };
            }

            // Sum all values 
            acc[key].asignado += m.asignado ?? 0;
            acc[key].utilizado += m.utilizado ?? 0;
            acc[key].available = acc[key].asignado - acc[key].utilizado;

            return acc;
        }, {} as Record<string, any>);
       
        const result = Object.values(groupedData).sort((a: any, b: any) =>
            a.codart.localeCompare(b.codart)
        );

        return result;
        
    }

    async GetConditions(): Promise<CondicionDto[]> {
        const condi = await this.sql.condicio.findMany({
            select:
            {
                co_cond: true,
                cond_des: true,
                dias_cred: true,
            },
            orderBy: {
                cond_des: "asc",
            },
        });
        const result: CondicionDto[] = condi.map(c => ({
            co_cond: c.co_cond,
            cond_des: c.cond_des,
            dias_cred: c.dias_cred,
        }));


        return result;
    }

    async GetExchangeRate(fecha?: Date): Promise<TasaDto> {
        const tasa = await this.sql.tasas.findFirst({
            where: {
                ...(fecha ? { fecha } : {}),

            },
            orderBy: {
                fecha: 'desc',
            },
        });

        const result: TasaDto = {
            fecha: tasa?.fecha ?? new Date(),
            co_mone: tasa?.co_mone ?? 'USD',
            tasa_v: Number(tasa?.tasa_v)
         
        };

        return result;
    }

    async GetIVA(): Promise<IVADto | null> {
        const iva = await this.sql.tab_enc.findFirst({
            select: {
                tasa: true,

            },
            orderBy: {
                fecha: 'desc',
            },
        });

        if (!iva) return null;

        const mapped = {
            ...iva,
            tasa: Number(iva.tasa) / 100,
        };

        return plainToInstance(IVADto, mapped, {
            enableImplicitConversion: true,
        });
    }

    async GetNextOrderNumber() {
        const lastOrder = await this.sql.par_emp.findFirst({
            select: {
                ped_num: true,
            },
        });

        if (!lastOrder) {
            throwError(() => new Error('No se pudo obtener el número de pedido'));
        }
        else {
            return (lastOrder.ped_num + 1)
        }

    }

    // async InsertOrder2(pedido: PedidoDTO, codven?: string): Promise<number | undefined> {

    //    return await this.GetNextOrderNumber();
    // }

    async InsertOrder(pedido: PedidoDTO, codven?: string): Promise<number | undefined> {
        if (!codven) {
            throw new BadRequestException('El código de vendedor (codven) es obligatorio para procesar el pedido.');
        }

        const db = process.env.SQLSERVER_DATABASE;

        const {
            nombre, rif, status, comentario, saldo,
            co_cli, dir_ent, forma_pag, tot_bruto, tot_neto,
            iva, tasa, tasag, reng_ped,
        } = pedido;

        const factNumber = await this.GetNextOrderNumber();
        const date = pedido.fec_emis ? new Date(pedido.fec_emis) : new Date();
        const date2 = pedido.fec_venc ? new Date(pedido.fec_venc) : new Date();

        const moneda = pedido.moneda === 'USD' ? 'US$   ' : 'VES   ';
        const fecEmi = getVzlaDateForDB(date);
        const fecVen = getVzlaDateForDB(date2);
        const co_tran = '0002  ';
        const almacen = '0001  ';
        const unit = '0001  ';
        const globalDesc = 0.00;
        const tot_reca = 0.00;
        const porc_gdesc = 0;
        const porc_reca = 0;
        const revisado = ' ';
        const descrip = '';
        const codVen = codven.padEnd(6, ' ');
        const serialp = factNumber!.toString().padStart(8, '0');


        const year = DateUtils.GetYear();
        const month = DateUtils.GetMonthMM();

        for (const r of reng_ped) {
            const meta = await this.mysql.metas.findFirst({
                where: {
                    anio: year,
                    mes: month,
                    codart: r.co_art,
                    ...(codven ? { codven } : {}),
                },
            });

            if (!meta) throw new Error(`No existe meta para el artículo ${r.co_art}`);

            const disponible = meta.asignado - meta.utilizado;
            if (r.total_art! > disponible) {
                const mssg = disponible > 0
                    ? `${disponible} Unidad(es) disponible(s)`
                    : 'Sin unidades disponibles';
                throw new Error(`Meta insuficiente para ${r.co_art?.trim()}. ${mssg}`);
            }
        }
        console.log(comentario)

        // INSERT pedidos
        const insertPedidoSQL = `
            INSERT INTO ${db}.dbo.pedidos (
                fact_num, contrib, nombre, rif, descrip, status, comentario, saldo, fec_emis,
                fec_venc, co_cli, co_ven, co_tran, revisado, dir_ent, forma_pag, tot_bruto, tot_neto,
                glob_desc, tot_reca, porc_gdesc, porc_reca, iva, tasa, moneda, tasag,
                co_us_in, co_sucu, telefono, serialp, origen, origen_d
            ) VALUES (
                @P1,1,@P2,@P3,@P4,@P5,@P6,@P7,@P8,
                @P9,@P10,@P11,@P12,@P13,@P14,@P15,@P16,@P17,
                @P18,@P19,@P20,@P21,@P22,@P23,@P24,@P25,'911','0001','',@P26,'M','frigiluxappsge'
            )
        `;
        const insertPedidoParams = [
            factNumber, nombre, rif, descrip, status, comentario, saldo, fecEmi,
            fecVen, co_cli, codVen, co_tran, revisado, dir_ent, forma_pag, tot_bruto, tot_neto,
            globalDesc, tot_reca, porc_gdesc, porc_reca, iva, tasa, moneda, tasag, serialp,
        ];


        const insertRengSQL = `
            INSERT INTO ${db}.dbo.reng_ped (
                fact_num, reng_num, co_art, co_alma, total_art, pendiente,
                uni_venta, prec_vta, prec_vta2, reng_neto, porc_desc,
                cos_pro_un, ult_cos_un, ult_cos_om, cos_pro_om, tipo_imp, fec_lote
            ) VALUES (@P1,@P2,@P3,@P4,@P5,@P6,@P7,@P8,@P9,@P10,@P11,@P12,@P13,@P14,@P15,@P16,@P17)
        `;


        const updateStockSQL = reng_ped.map(r => `
            UPDATE ${db}.dbo.art
                SET stock_com = stock_com + ${Number(r.total_art)}
                WHERE co_art = '${r.co_art}';

            UPDATE ${db}.dbo.st_almac
                SET stock_com = stock_com + ${Number(r.total_art)}
                WHERE co_art = '${r.co_art}' AND co_alma = '${almacen}';
        `).join('');

        // UPDATE par_emp
        const updateParEmpSQL = `UPDATE ${db}.dbo.par_emp SET ped_num = @P1`;

        //  transaction
        return this.sql.$transaction(async (tx) => {
            await tx.$executeRawUnsafe(insertPedidoSQL, ...insertPedidoParams);

            for (const r of reng_ped) {
                await tx.$executeRawUnsafe(insertRengSQL,
                    factNumber, r.reng_num, r.co_art, almacen,
                    r.total_art, r.total_art, unit,
                    r.prec_vta, r.prec_vta2, r.reng_neto, r.porc_desc || '',
                    r.cos_pro_un, r.ult_cos_un, r.ult_cos_om, r.cos_pro_om,
                    r.tipo_imp, fecEmi,
                );
            }

            await tx.$executeRawUnsafe(updateStockSQL);
            await tx.$executeRawUnsafe(updateParEmpSQL, factNumber);

            return factNumber;
        });
    }

}
