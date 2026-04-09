import { Injectable } from '@nestjs/common';
import { mkdir, writeFile } from 'fs/promises';
import os from 'os';
import path from 'path';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

import { CbDevolucionDto } from './dtos/create-devolucion.dto';
import { MotiveItemDto } from './dtos/motive.dto';
import { ReturnByFactDto } from './dtos/returnbyfact.dts';
import { CodMotives } from './types/CodMotives';
import { DtPredes } from './types/dtpredes';


@Injectable()
export class ReturnsService {
    private readonly baseDir: string;

    constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) {
        // Detectar SO y asignar  
        this.baseDir = this.getBaseDirectory();
    }

    private getBaseDirectory(): string {
        const platform = os.platform();
        const homeDir = os.homedir();

        if (platform === 'darwin') {
            // macOS
            
            return process.env.IMAGES_ROUTE_DEVOLUCION || '';
        } else if (platform === 'win32') {
            // Windows
           
            return process.env.IMAGES_ROUTE_DEVOLUCION || '';
        } else {
                 
            // Linux u otros
            return process.env.IMAGES_ROUTE_DEVOLUCION || '' ;
        }
    }

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


    async createReturn(createDevolucionDto: CbDevolucionDto, codven?: string, nameUser?: string) {
        if (!createDevolucionDto) {
            throw new Error("Return data not provided.");
        }

        // Get seller data (Outside the transaction to avoid locking tables)
        const finalCodVen = codven ? codven : ''   
        const vendedor = await this.sql.vendedor.findFirst({
            select: { ven_des: true },
            where: { co_ven: finalCodVen ? { startsWith: finalCodVen } : undefined }
        });
        const vendesValue = vendedor?.ven_des ?? '';




        return await this.mysql.$transaction(async (tx) => {

            // Separate header from detail
            const { dtdevolucion, ...cabeceraData } = createDevolucionDto;

            //  Create Header
            const nuevaDevolucion = await tx.cbdevolucion.create({
                data: { ...cabeceraData }
            });

            //  Create Detail and Photos (if they exist)
            if (dtdevolucion) {
               
                //Only if dont use supabase storage, if use supabase storage, the url is the same and not need to download the image
                if (dtdevolucion.ftdevolucion) {
                    for (let i = 1; i <= 15; i++) {
                        const field = `namefoto${i}` as keyof typeof dtdevolucion.ftdevolucion;
                        if (!Object.prototype.hasOwnProperty.call(dtdevolucion.ftdevolucion, field)) continue;
                        const url = dtdevolucion.ftdevolucion[field];
                        if (!url) continue;
                        try {
                            
                            const originalFilename = (cabeceraData.serial1 ? cabeceraData.serial1 : 'foto') + i + '.webp';
                            const filename =  originalFilename;
                            const savedPath = await this.downloadWebpImage(url, filename);
                            dtdevolucion.ftdevolucion[field] = filename;
                        } catch (error) {
                            console.error(`Error downloading ${field}:`, error);
                        }
                    }
                }

                const { ftdevolucion, devonum, pednum, ...datosRestantes } = dtdevolucion;

                await tx.dtdevolucion.create({
                    data: {
                        ...datosRestantes,
                        devonum: nuevaDevolucion.devonum, // Relation with newly created ID
                        pednum: pednum || 0,             // Ensure numerical value
                        vendes: vendesValue,
                        codven: finalCodVen,


                        ftdevolucion: ftdevolucion ? {
                            create: {
                                // Clean up any junk fields or previous IDs from the DTO
                                ...(({ devonum, ...validFields }) => validFields)(ftdevolucion),
                            }
                        } : undefined,
                    }
                });
            }

            return nuevaDevolucion;
        });
    }

    async getDevolveds(serial: string) {
        const devolveds = await this.mysql.dtdevolucion.findMany({
            // where: {
            //     serial: {
            //         startsWith: serial
            //     },
            // }
        });
        return devolveds;
    }

    private async ensureDirectoryExists(directory: string) {
        await mkdir(directory, { recursive: true });
    }

    async downloadWebpImage(url: string, filename: string, customDirectory?: string): Promise<string> {
        if (!url) {
            throw new Error('Image URL not provided.');
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to download image ${url}: ${response.status} ${response.statusText}`);
        }

        const buffer = Buffer.from(await response.arrayBuffer());


        const directory = customDirectory || this.baseDir;
        await this.ensureDirectoryExists(directory);

        const safeFilename = filename.endsWith('.webp') ? filename : `${filename}.webp`;
        const filePath = path.join(directory, safeFilename);

        await writeFile(filePath, buffer);
        return filePath;
    }

  

    async getMotives() {

        const codmotives: CodMotives[] = [
            "DAÑADO",
            "GARANTIA",
            "NO SOLICITADO",
            "GOLPEADO",
            "REPONER",
            "CAMBIO X CAMBIO",
            "EXCEDENTE"
        ];

        const motives: MotiveItemDto[] = codmotives.map((codmotive, index) => ({
            id: index + 1,
            codmotive
        }));

        return motives;
    }

}