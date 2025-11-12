import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { DateUtils } from 'src/utils/date.utils';
@Injectable()
export class CreateOrdersService {
    constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) { }

    async GetProductsOrders(codven?:string) {
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
        const available= metas.filter(
            (m) => m.asignado-m.utilizado>0
        );



        // get info
        const codarts = available.map((m) => m.codart);
        const arts = await this.mysql.mtprofitart.findMany({
            select:{
                codart:true,
                artdes:true,
                precvta1:true,
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
                available: m.asignado-m.utilizado,
            };
        }).sort((a, b) => a.codart.localeCompare(b.codart));
    }

}
