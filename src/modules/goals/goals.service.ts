import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { DateUtils } from 'src/utils/date.utils';
import { GoalsDto } from './dtos/goals.dto';
import { DataGoalsProfit } from './interfaces/DataGoalsProfit';
import { DataGoals } from './types/DataGoals';

@Injectable()
export default class GoalsService {
    constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) { }

    async DataGoals(codven?: string): Promise<DataGoals[]> {

        let whereClause = `
          anulada = 0 AND 
          YEAR(fec_emis) = YEAR(GETDATE()) AND 
          MONTH(fec_emis) = MONTH(GETDATE())
        `;

        if (codven) {
            whereClause += ` AND co_ven LIKE '${codven}'`;
        }

        const pedidos = await this.sql.$queryRawUnsafe(`
            SELECT DISTINCT 
            YEAR(fec_emis) AS eanio,
            CASE 
                WHEN CAST(MONTH(fec_emis) AS INT) < 10 THEN '0' + CAST(MONTH(fec_emis) AS CHAR(2))
                ELSE CAST(MONTH(fec_emis) AS CHAR(2))
            END AS emes,
            co_art,
            co_ven,
            SUM(total_art) AS totalart
            FROM TECH_A.dbo.reng_ped 
            INNER JOIN TECH_A.dbo.pedidos ON pedidos.fact_num = reng_ped.fact_num
            WHERE ${whereClause}
            GROUP BY YEAR(fec_emis), MONTH(fec_emis), co_art, co_ven
        `) as DataGoalsProfit[];

        const dataGoals: DataGoals[] = [];
        pedidos.forEach(data => {
            dataGoals.push({
                year: data.eanio.toString(),
                month: data.emes.toString(),
                co_art: data.co_art.toString(),
                co_ven: data.co_ven.toString(),
                totalart: Number(data.totalart),
            }
            )
        }
        )
        return dataGoals;
    }

    async setUtilizado(codven?: string): Promise<boolean> {

        //UPDATE metas SET utilizado = 0 WHERE anio = EXTRACT(YEAR FROM NOW()) AND mes = EXTRACT(MONTH FROM NOW()) AND codven = '$coven';");

        const whereClause: any = {
            anio: DateUtils.GetYear(),
            mes: DateUtils.GetMonthMM(),
            ...(codven ? { codven } : {}),
        };

        const result = await this.mysql.metas.updateMany({
            where: whereClause,
            data: { utilizado: 0 },
        });

        return result.count >= 0;
    }


    async GetGoals(codven?: string): Promise<GoalsDto[]> {

        // SELECT...      FROM TECH_A.dbo.reng_ped... GROUP BY YEAR(fec_emis)...;
        const dataGoals = await this.DataGoals(codven);

        //UPDATE metas SET utilizado = 0 
        //const setUtilizado: boolean = await this.setUtilizado(codven);


        //UPDATE metas SET utilizado = $totalart WHERE anio = '$eanio' AND mes = '$emes' AND codven = '$coven' AND codart = '$co_art';


        //rollback
        // await this.mysql.$transaction(async (tx) => {
        //     for (const item of dataGoals) {
        //         await tx.metas.update({
        //             where: {
        //                 anio_mes_codven_codart: {
        //                     anio: item.year,
        //                     mes: item.month,
        //                     codven: item.co_ven,
        //                     codart: item.co_art,
        //                 },
        //             },
        //             data: {
        //                 utilizado: Math.round(item.totalart),
        //             },
        //         });

        //     }
        // });


        const goals = await this.mysql.metas.findMany({
            where: {
                anio: DateUtils.GetYear(),
                mes: DateUtils.GetMonthMM(),
                ...(codven ? { codven: codven } : {}),
            },
            include: {
                articulo: {
                    select: {
                        codart: true,
                        artdes: true,
                        categoria: {
                            select: {
                                codcat: true,
                                catdes: true,

                            },
                        },
                    },
                },
            },
        });

        return goals.map((item) => ({
            year: item.anio,
            mes: item.mes,
            codven: item.codven,
            codart: item.codart,
            artdes: item.articulo?.artdes ?? '',
            codcat: item.articulo?.categoria?.codcat ?? '',
            catdes: item.articulo?.categoria?.catdes ?? '',
            asignado: item.asignado,
            utilizado: item.utilizado,
        }));

    }

}
