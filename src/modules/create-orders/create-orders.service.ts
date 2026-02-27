import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { DateUtils } from 'src/utils/date.utils';
import { getVzlaDateForDB } from 'src/utils/date.venezuela.db';
import { CondicionDto } from './dtos/condicion.dto';
import { IVADto } from './dtos/iva.dto';
import { PedidoDTO } from './dtos/pedido.dto';
import { TasaDto } from './dtos/tasa.dto';
@Injectable()
export class CreateOrdersService {
    constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) { }

    async GetProductsOrders(codven?: string) {
        const year = DateUtils.GetYear();
        const month = DateUtils.GetMonthMM();

        const metas = await this.mysql.metas.findMany({
            where:
            {
                anio: year,
                mes: month,
                asignado: { gt: 0 },
                ...(codven ? { codven } : {}),

            },
        });
        const available = metas.filter(
            (m) => m.asignado - m.utilizado > 0
        );



        // get info
        const codarts = available.map((m) => m.codart);
        const arts = await this.mysql.mtprofitart.findMany({
            select: {
                codart: true,
                artdes: true,
                precvta1: true,
                cosproun:true,
                ultcosun: true,
                ultcosunom: true,
                cosprounom:true
                  
            },
            where: { codart: { in: codarts } },
        });

        // group data
        return available.map((m) => {
            const art = arts.find((a) => a.codart === m.codart);
            return {

                codven: m.codven,
                codart: m.codart,
                artdes: art?.artdes.trimEnd() ?? '',
                asignado: m.asignado ?? 0,
                utilizado: m.utilizado ?? 0,
                price: art?.precvta1,
                available: m.asignado - m.utilizado,
            };
        }).sort((a, b) => a.codart.localeCompare(b.codart));
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
                //fecha: true,
                // tasa3: true,
                // tasa4: true,
                // tasa5: true,
                // tasag10: true,
                // tasag20: true,
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
        // const lastOrder = await this.sql.par_emp.findFirst({
        //     orderBy: {
        //         orderNumber: 'desc',
        //     },
        // });

        // return lastOrder ? lastOrder.orderNumber + 1 : 1;
        return 1;
    }
    async InsertOrder(pedido: PedidoDTO) {
        const {
            fact_num,
            nombre,
            rif,
            descrip,
            status,
            comentario,
            saldo,
            fec_emis,
            fec_venc,
            co_cli,
            co_ven,
            co_tran,
            revisado,
            dir_ent,
            forma_pag,
            tot_bruto,
            tot_neto,
            glob_desc,
            tot_reca,
            porc_gdesc,
            porc_reca,
            iva,
            tasa,
            moneda,
            tasag,
            telefono,
            serialp,
            reng_ped
        } = pedido;

        const date = pedido.fec_emis
            ? new Date(pedido.fec_emis)
            : new Date();
        const date2 = pedido.fec_venc
            ? new Date(pedido.fec_venc)
            : new Date();

        const fecEmi = getVzlaDateForDB(date);
        const fecVen = getVzlaDateForDB(date2);

        return this.sql.$transaction(async (tx) => {
            // 1️⃣ INSERT pedido
            await tx.$executeRaw`
        INSERT INTO passve.dbo.pedidos (
          fact_num, contrib, nombre, rif, descrip, status, comentario,
          saldo, fec_emis, fec_venc, co_cli, co_ven, co_tran, revisado,
          dir_ent, forma_pag, tot_bruto, tot_neto, glob_desc, tot_reca,
          porc_gdesc, porc_reca, iva, tasa, moneda, tasag,
          co_us_in, co_sucu, telefono, serialp
        ) VALUES (
          ${fact_num},
          1,
          ${nombre},
          ${rif},
          ${descrip},
          ${status},
          ${comentario},
          ${saldo},
          ${fecEmi},
          ${fecVen},
          ${co_cli},
          ${co_ven},
          ${co_tran},
          ${revisado},
          ${dir_ent},
          ${forma_pag},
          ${tot_bruto},
          ${tot_neto},
          ${glob_desc},
          ${tot_reca},
          ${porc_gdesc},
          ${porc_reca},
          ${iva},
          ${tasa},
          ${moneda},
          ${tasag},
          ${'911'},
          ${'0001'},
          ${telefono},
          ${serialp}
        )
      `;

            // 2️INSERT 
            for (const reng of reng_ped) {
                await tx.$executeRaw`
          INSERT INTO passve.dbo.reng_ped (
            fact_num, reng_num, co_art, co_alma,
            total_art, pendiente, uni_venta,
            prec_vta, prec_vta2, reng_neto,
            porc_desc, cos_pro_un,
            ult_cos_un, ult_cos_om, cos_pro_om,
            tipo_imp, fec_lote
          ) VALUES (
            ${fact_num},
            ${reng.reng_num},
            ${reng.co_art},
            ${reng.co_alma},
            ${reng.total_art},
            ${reng.pendiente},
            ${reng.uni_venta},
            ${reng.prec_vta},
            ${reng.prec_vta2},
            ${reng.reng_neto},
            ${reng.porc_desc},
            ${reng.cos_pro_un},
            ${reng.ult_cos_un},
            ${reng.ult_cos_om},
            ${reng.cos_pro_om},
            ${reng.tipo_imp},
            ${reng.fec_lote ? new Date(reng.fec_lote) : null}
          )
        `;
            }

            return {
                ok: true,
                fact_num
            };
        });
    }
}
