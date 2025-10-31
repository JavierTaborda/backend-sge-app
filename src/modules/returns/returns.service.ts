import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { ReturnByFactDto } from './dtos/returnbyfact.dts';

@Injectable()
export class ReturnsService {
    constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) { }
    async getOrderByFactNumber(fact_number?: number) {

        if (!fact_number) {
            throw new Error("fact_number is required to fetch the order.");
        }
        const order = await this.sql.pedidos.findUnique({
            where: {
                fact_num: fact_number,
            },
            select: {
                fact_num: true,
                fec_emis: true,
                co_cli: true,
                co_ven: true,
                reng_ped: {
                    select: {
                        co_art: true,
                        art: {
                            select: {
                                art_des: true
                            }
                        }
                    },

                },
                cliente: {
                    select: {
                        cli_des: true
                    },
                },
            },
        });


        const result: ReturnByFactDto = {           
            fact_num: order?.fact_num ?? 0,           
            fecemis: order?.fec_emis as Date,               
            codcli: order?.co_cli ?? '',
            clides: order?.cliente?.cli_des ?? '',          
              codven: order?.co_ven ?? '',                        
              vendes: '',           
            art: (order?.reng_ped ?? []).map(r => ({
                co_art: r.co_art?.trim() ?? '',
                art_des: r.art?.art_des?.trim() ?? ''
            }))
             
        }

        return result;

    }
    async getDataBySerial(serial:string){

        const data = await this.mysql.dtpredes.findFirst({
            where:{
                serial1:{
                    startsWith:serial
                }
            }
        })
        return data
    }

}
