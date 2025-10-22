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
            'MONTH(fec_emis) = MONTH(GETDATE())',
           
        ];

        if (codven) {
            if (codven.includes(',')) {
                // Si vienen varios: "00006,00022"
                const list = codven
                    .split(',')
                    .map(v => `'${v.trim()}'`)
                    .join(',');

                whereClause.push(`(LTRIM(RTRIM(co_ven)) IN (${list}))`);

            } else {
                whereClause.push(`(co_ven) = '${codven}'`);
            }
        } else{
            whereClause.push(`co_ven <>'00001'`)
        }



        const query = `
        SELECT 
            YEAR(fec_emis) AS eanio,
            RIGHT('0' + CAST(MONTH(fec_emis) AS VARCHAR(2)), 2) AS emes,
            co_art,
            co_ven,
            
            SUM(total_art) AS totalart
        FROM TECH_A.dbo.reng_ped rp
        INNER JOIN TECH_A.dbo.pedidos p ON p.fact_num = rp.fact_num
        WHERE ${whereClause.join(' AND ')}
        GROUP BY YEAR(fec_emis), MONTH(fec_emis), co_art, co_ven
        ORDER BY co_art
        `;

        const pedidos = await this.sql.$queryRawUnsafe(query) as DataGoalsProfit[];

        const result = pedidos.map((d) => ({
            year: d.eanio.toString(),
            month: d.emes.toString(),
            co_art: d.co_art.toString(),
            co_ven: d.co_ven.toString(),
            totalart: Number(d.totalart),
        }));

        return result;
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


        try {
            await this.mysql.$transaction(async (tx) => {
                await Promise.all(
                    dataGoals.map((item) =>
                        tx.metas.updateMany({
                            where: {
                                anio: item.year,
                                mes: item.month,
                                codven: item.co_ven,
                                codart: item.co_art,
                            },
                            data: { utilizado: item.totalart },
                        })

                    )
                );
            });
        } catch (error) {
            console.log('fail to update *metas*:', error);
        }



        if (codven) {

            const codvenList = codven
                .split(',')
                .map(v => v)
                .filter(Boolean);

            const goals = await this.mysql.metas.findMany({
                where: {
                    anio: DateUtils.GetYear(),
                    mes: DateUtils.GetMonthMM(),
                    asignado: { gt: 0 },
                    ...(codvenList
                        ? {
                            OR: codvenList.map((cod) => ({
                                codven: { startsWith: cod.trim() },
                            })),
                        }
                        : {}),

                },
                include: {
                    articulo: {
                        select: {
                            codart: true,
                            artdes: true,
                        },
                    },


                },
            });
            const vendedores = await this.GetSellers();


            const result: GoalsDto[] = goals
                .map((item) => ({
                    year: item.anio,
                    mes: item.mes,
                    codven: item.codven.trim(),
                    codart: item.codart,
                    artdes: item.articulo?.artdes ?? '',
                    asignado: item.asignado,
                    utilizado: item.utilizado,
                    vendes: vendedores.find(v => v.codven.startsWith(item.codven))?.vendes ?? '',
                }))
                .sort((a, b) => a.codart.localeCompare(b.codart))


        
            return result;


        }


        // if codven is null
        const year = DateUtils.GetYear();
        const month = DateUtils.GetMonthMM();

        const metasAgrupadas = await this.mysql.metas.groupBy({
            by: ['anio', 'mes', 'codart'],
            where: { anio: year, mes: month, asignado: { gt: 0 } },
            _sum: {
                asignado: true,
                utilizado: true,
            },
        });

        // get info
        const codarts = metasAgrupadas.map((m) => m.codart);
        const arts = await this.mysql.mtprofitart.findMany({
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
                vendes: ''
            };
        }).sort((a, b) => a.codart.localeCompare(b.codart));
        ;
    }

    //filter data
    async GetSellers(): Promise<SellersDto[]> {
        // Goals by vendedores
        const ven = await this.mysql.clvendedores.findMany({
            where: {

                codven: { not: '00001' }
            },
            select: {
                codven: true,
                vendes: true,
            },
        });

        return ven;
    }

}
