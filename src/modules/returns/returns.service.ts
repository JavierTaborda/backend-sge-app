import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { CreateDevolucionDto } from './dtos/create-devolucion.dto';
import { ReturnByFactDto } from './dtos/returnbyfact.dts';
import { DtPredes } from './types/dtpredes';

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
                vendedor: {
                    select: {
                        ven_des: true
                    }
                }
            },
        });


        if (!order) {
            return null;
        }

        const barcodes = await this.mysql.mtarticulos.findMany({
            where: {
                codart: { in: order.reng_ped.map(r => r.co_art ?? '') }
            },
            select: {
                codart: true,
                codbarra: true
            }
        });

        const result: ReturnByFactDto = {
            fact_num: order?.fact_num ?? 0,
            fecemis: order?.fec_emis as Date,
            codcli: order?.co_cli ?? '',
            clides: order?.cliente?.cli_des ?? '',
            codven: order?.co_ven ?? '',
            vendes: order?.vendedor?.ven_des ?? '',
            art: (order?.reng_ped ?? []).map(r => ({
                co_art: r.co_art?.trim() ?? '',
                art_des: r.art?.art_des?.trim() ?? '',
                codbarra: barcodes.find(b => b.codart === r.co_art)?.codbarra ?? ''
            }))

        }

        return result;

    }
    async getDataBySerial(serial: string) {

        const predes = await this.mysql.dtpredes.findFirst({
            where: {
                serial1: {
                    startsWith: serial
                }
            }
        }) as DtPredes;

        if (predes == null) {
            return null;
        }
        const order = await this.sql.pedidos.findFirst({
            where: {
                fact_num: predes?.pednum,
            },
            select: {
                fact_num: true,
                fec_emis: true,
                co_cli: true,
                co_ven: true,
                reng_ped: {
                    where: {
                        co_art: predes?.codart
                    },
                    select: {
                        co_art: true,
                        art: {
                            select: {
                                art_des: true
                            }
                        }
                    }
                },
                cliente: {
                    select: {
                        cli_des: true
                    }
                },
                vendedor: {
                    select: {
                        ven_des: true
                    }
                }
            }
        });


        const data = {
            fact_num: order?.fact_num,
            fecemis: order?.fec_emis as Date,
            codcli: order?.co_cli ?? '',
            clides: order?.cliente?.cli_des ?? '',
            codven: order?.co_ven ?? '',
            vendes: order?.vendedor?.ven_des,
            codart: predes.codart,
            artdes: order?.reng_ped.find(c => c.art?.art_des)?.art?.art_des,
            codbarra: predes?.codbarra,
            serial: predes.serial1
        }

        return data
    }
    async createReturn(createDevolucionDto: CreateDevolucionDto, codven?: string) {

        if (!createDevolucionDto) {
            throw new Error("Datos de devolución no proporcionados.");
        }
      
        if (!createDevolucionDto.codven || createDevolucionDto.codven.trim().length === 0) {
            if (!codven || codven.trim().length === 0) {
                throw new Error("Código de vendedor no proporcionado.");
            }

            const vendedor = await this.sql.vendedor.findFirst({
                select: { ven_des: true },
                where: { co_ven: { startsWith: codven } }
            });

            createDevolucionDto.vendes = vendedor?.ven_des ?? 'Sin descripción';
        }

        const nuevaDevolucion = await this.mysql.mvdevolucion.create({
            data: createDevolucionDto
        });

        return nuevaDevolucion;

    }

    async getDevolveds(serial: string) {
        const devolveds = await this.mysql.mvdevolucion.findMany({
            where: {
                serial1: {
                    startsWith: serial
                },
            }
        });
        return devolveds;
    }

}
