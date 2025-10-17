import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { DateUtils } from 'src/utils/date.utils';
import { GoalsDto } from './dtos/goals.dto';
import { SellersDto } from './dtos/Sellers.dto';
import { DataGoalsProfit } from './interfaces/DataGoalsProfit';
import { DataGoals } from './types/DataGoals';

@Injectable()
export default class GoalsService {
    constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) { }

    async DataGoals(codven?: string): Promise<DataGoals[]> {

        const whereClause = [
            'anulada = 0',
            'YEAR(fec_emis) = YEAR(GETDATE())',
            'MONTH(fec_emis) = MONTH(GETDATE())'
        ];


        if (codven) {
            if (codven.includes(',')) {
                //  "'001','002','003'"
                whereClause.push(`co_ven IN (${codven})`);
            } else {
                whereClause.push(`co_ven = @codven`);
            }

            
        }



        const pedidos = (await this.sql.$queryRawUnsafe(
            `
      SELECT 
        YEAR(fec_emis) AS eanio,
        RIGHT('0' + CAST(MONTH(fec_emis) AS VARCHAR(2)), 2) AS emes,
        co_art,
        ${codven ? 'co_ven,' : `'GENERAL' AS co_ven,`}
        SUM(total_art) AS totalart
      FROM TECH_A.dbo.reng_ped rp
      INNER JOIN TECH_A.dbo.pedidos p ON p.fact_num = rp.fact_num
      WHERE ${whereClause.join(' AND ')}
      GROUP BY YEAR(fec_emis), MONTH(fec_emis), co_art, co_ven
    `,
            codven ? { codven } : undefined,
        )) as DataGoalsProfit[];

        return pedidos.map((d) => ({
            year: d.eanio.toString(),
            month: d.emes.toString(),
            co_art: d.co_art.toString(),
            co_ven: d.co_ven.toString(),
            totalart: Number(d.totalart),
        }));

    }

    async resetUtilizado(codven?: string): Promise<boolean> {

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
        //const resetUtilizado: boolean = await this.setUtilizado(codven);


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

        //method 2
        // await this.mysql.$transaction(async (tx) => {

        //     // make  batch with Promise.all
        //     await Promise.all(
        //         dataGoals.map((item) =>
        //             tx.metas.updateMany({
        //                 where: {
        //                     anio: item.year,
        //                     mes: item.month,
        //                     codven: item.co_ven,
        //                     codart: item.co_art,
        //                 },
        //                 data: { utilizado: Math.round(item.totalart) },
        //             }),
        //         ),
        //     );
        // });
        //TODO: fix sql
        if (codven) {
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
                        },
                    },
                    vendedores:{
                        select:{
                            vendes:true
                        }
                    }
                    
                },
            });


            const result: GoalsDto[] = goals
                .map((item) => ({
                    year: item.anio,
                    mes: item.mes,
                    codven: item.codven.trim(),
                    codart: item.codart,
                    artdes: item.articulo?.artdes ?? '',
                    asignado: item.asignado,
                    utilizado: item.utilizado,
                    vendes: item.vendedores?.vendes.trim() ?? '',
                }))
                .sort((a, b) => a.utilizado - b.utilizado);

            return result;

        }
        // if codven is null
        const year = DateUtils.GetYear();
        const month = DateUtils.GetMonthMM();

        const metasAgrupadas = await this.mysql.metas.groupBy({
            by: ['anio', 'mes', 'codart'],
            where: { anio: year, mes: month },
            _sum: {
                asignado: true,
                utilizado: true,
            },
        });

        // get info
        const codarts = metasAgrupadas.map((m) => m.codart);
        const arts = await this.mysql.mtarticulos.findMany({
            where: { codart: { in: codarts } },
        });

        // group data
        return metasAgrupadas.map((m) => {
            const art = arts.find((a) => a.codart === m.codart);
            return {
                year: m.anio,
                mes: m.mes,
                codven: '', 
                codart: m.codart,
                artdes: art?.artdes ?? '',
                asignado: m._sum.asignado ?? 0,
                utilizado: m._sum.utilizado ?? 0,
                vendes:''
            };
        }).sort((a, b) => a.utilizado - b.utilizado);
    }
    
    //filter data
    async GetSellers(): Promise<SellersDto[]> {
        // Goals by vendedores
        const metas = await this.mysql.metas.findMany({
            where: {
                anio: DateUtils.GetYear(),
                mes: DateUtils.GetMonthMM(),
            },
            select: {
                vendedores: {
                    select: {
                        codven: true,
                        vendes: true,
                    },
                },
            },
        });

        // Filter uniq
        const uniqueSellersMap = new Map<string, SellersDto>();
        metas.forEach(meta => {
            const seller = meta.vendedores;
            if (seller && !uniqueSellersMap.has(seller.codven)) {
                uniqueSellersMap.set(seller.vendes, {
                    co_ven: seller.codven,
                    des_ven: seller.vendes,
                });
            }
        });

        return Array.from(uniqueSellersMap.values());
    }

}
