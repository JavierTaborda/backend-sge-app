import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

@Injectable()
export default class GoalsService {
    constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) { }

    async DataGoals(role?: string, codven?: string) {

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
        `);
        return pedidos;
    }
    async 

    async GetGoals(role?: string, codven?: string) {

        const dataGoals = await this.DataGoals(role, codven);

        //UPDATE metas SET utilizado = 0 WHERE anio = EXTRACT(YEAR FROM NOW()) AND mes = EXTRACT(MONTH FROM NOW()) AND codven = '$coven';");
        console.log(dataGoals)



        //UPDATE metas SET utilizado = $totalart WHERE anio = '$eanio' AND mes = '$emes' AND codven = '$coven' AND codart = '$co_art';


        // for (const item of dataGoals) {
        //     const { eanio, emes, co_ven, co_art, totalart } = item;

        //     try {
        //         await this.prisma.metas.update({
        //             where: {
        //                 anio_mes_codven_codart: {
        //                     anio: String(eanio),
        //                     mes: String(emes),
        //                     codven: co_ven,
        //                     codart: co_art,
        //                 },
        //             },
        //             data: {
        //                 utilizado: Math.round(totalart),
        //             },
        //         });
        //     } catch (error) {
        //         console.warn(`No se pudo actualizar meta para ${co_art} - ${co_ven}:`, error.message);
        //         // Puedes manejar errores aquí si la combinación no existe
        //     }
        // }


        const result = await this.mysql.metas.findMany({
            where: {
                anio: '2024',//DateUtils.GetYear(),
                mes: '06',//DateUtils.GetMonthMM(),
                //codven: '00002',
                ...((role === '5' || role === '4') && codven ? { codven: codven } : {}),
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

        return dataGoals;
    }

}
