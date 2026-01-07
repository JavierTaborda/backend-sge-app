import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { DateUtils } from 'src/utils/date.utils';
import { CondicionDto } from './dtos/condicion.dto';
import { IVADto } from './dtos/iva.dto';
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

}
