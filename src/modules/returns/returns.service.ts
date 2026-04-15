import { Injectable } from '@nestjs/common';
import { mkdir, writeFile } from 'fs/promises';
import os from 'os';
import path from 'path';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { EmailService } from 'src/email/email.service';

import { TestMySQLPrismaService } from 'src/database/testmysql.service';
import { DateUtils } from 'src/utils/date.utils';
import { getVzlaDateForDB } from 'src/utils/date.venezuela.db';
import { CbDevolucionDto } from './dtos/create-devolucion.dto';
import { MotiveItemDto } from './dtos/motive.dto';
import { ReturnByFactDto } from './dtos/returnbyfact.dts';
import { ReturnBySerialDto } from './dtos/returnbyserial.dto';
import { CodMotives } from './types/CodMotives';
import { DtPredes } from './types/dtpredes';


@Injectable()
export class ReturnsService {
    private readonly baseDir: string;

    constructor(
        private readonly sql: SQLServerPrismaService,
        private readonly mysql: MySQLPrismaService,
        private readonly test: TestMySQLPrismaService,
        private readonly emailService: EmailService,
    ) {
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

            // Linux 
            return process.env.IMAGES_ROUTE_DEVOLUCION || '';
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
    async getDataBySerial(serial: string): Promise<ReturnBySerialDto | null> {


        const predes = await this.getPredesBySerial(serial);


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
                        cli_des: true,
                        dir_ent2: true,
                        telefonos: true,
                        email: true,
                        rif: true
                    }
                },
                vendedor: {
                    select: {
                        ven_des: true
                    }
                },

            }
        });
        const zone = await this.mysql.clzonas.findFirst({
            where: {
                codzon: predes?.cbpredes?.codzon ?? ''
            },
            select: {
                zondes: true
            }
        });


        const data: ReturnBySerialDto = {
            fact_num: order?.fact_num ?? 0,
            fecemis: order?.fec_emis as Date,
            fecdesp: predes?.cbpredes?.fecdesp as Date,
            codcli: predes.cbpredes?.codcli ?? '',
            clides: order?.cliente?.cli_des ?? '',
            codven: predes.cbpredes?.codven ?? '',
            vendes: order?.vendedor?.ven_des ?? '',
            codart: predes.codart,
            artdes: order?.reng_ped.find(c => c.art?.art_des)?.art?.art_des ?? '',
            codbarra: predes?.codbarra ?? '',
            serial: predes.serial1 ?? '',
            rif: order?.cliente?.rif ?? '',
            telefonos: order?.cliente?.telefonos ?? '',
            email: order?.cliente?.email ?? '',
            dir_ent2: order?.cliente?.dir_ent2 ?? '',
            prednum: predes.prednum,
            pednum: predes.pednum,
            zondes: zone?.zondes ?? '',
            codzon: predes?.cbpredes?.codzon ?? ''

        }

        return data
    }


    async createReturn(createDevolucionDto: CbDevolucionDto, codven?: string, nameUser?: string) {
        if (!createDevolucionDto) {
            throw new Error("Return data not provided.");
        }

        if (createDevolucionDto.serial1) {
            const checkSerial = await this.mysql.cbdevolucion.findFirst({
                where: {
                    serial1: createDevolucionDto.serial1
                }, select: { serial1: true, devonum: true }

            });

            if (checkSerial) {
                throw new Error(`El serial ${createDevolucionDto.serial1} ya ha sido registrado en el sistema con la devolución número ${checkSerial.devonum}.`);
            }

        }


        // Get seller data (Outside the transaction to avoid locking tables)

        let vendesValue = '', finalCodVen = '';

        if (createDevolucionDto.dtdevolucion.codven && createDevolucionDto.dtdevolucion.vendes) {
            finalCodVen = createDevolucionDto.dtdevolucion.codven.trim();
            vendesValue = createDevolucionDto.dtdevolucion.vendes.trim();
        }
        else {
            finalCodVen = codven ? codven : ''

            const vendedor = await this.sql.vendedor.findFirst({
                select: { ven_des: true },
                where: { co_ven: finalCodVen ? { startsWith: finalCodVen } : undefined }
            });
            vendesValue = vendedor?.ven_des ?? '';
        }


        let images: string[] = [];



        //TODO: change to mysql
        return await this.test.$transaction(async (tx) => {

            // Separate header from detail
            const { dtdevolucion, rif, telefono, dirretiro, ...cabeceraData } = createDevolucionDto;

            //  Create Header
            const nuevaDevolucion = await tx.cbdevolucion.create({
                data: { ...cabeceraData, fecharegistro: getVzlaDateForDB(cabeceraData.fecharegistro) }
            });

            //  Create Detail and Photos (if they exist)
            if (dtdevolucion) {

                //Only if dont use supabase storage, if use supabase storage, the url is the same and not need to download the image
                if (dtdevolucion.ftdevolucion) {


                    for (let i = 1; i <= 5; i++) {
                        images.push(dtdevolucion.ftdevolucion[`namefoto${i}`] || '');
                        const field = `namefoto${i}` as keyof typeof dtdevolucion.ftdevolucion;
                        if (!Object.prototype.hasOwnProperty.call(dtdevolucion.ftdevolucion, field)) continue;
                        const url = dtdevolucion.ftdevolucion[field];
                        if (!url) continue;
                        try {


                            const savedPath = await this.downloadWebpImage(url);
                            dtdevolucion.ftdevolucion[field] = savedPath;
                        } catch (error) {
                            throw new Error(`Failed to process image for ${field}: ${error instanceof Error ? error.message : String(error)}`);
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
                        tiempofactura: DateUtils.getElapsedTimeText(datosRestantes.fechadespacho, new Date()),
                        fechadespacho: getVzlaDateForDB(new Date(datosRestantes.fechadespacho)),


                        ftdevolucion: ftdevolucion ? {
                            create: {
                                // Clean up any junk fields or previous IDs from the DTO
                                ...(({ devonum, ...validFields }) => validFields)(ftdevolucion),
                            }
                        } : undefined,
                    }
                });
            }
            setImmediate(async () => {
                try {
                    const body = await this.buildCollectionNoteEmail(
                        nuevaDevolucion,
                        images,
                        rif || '',
                        dirretiro || '',
                        telefono || ''

                    );

                    const to = ['jtaborda@cyberlux.com.ve'];
                    const subject = `solicitud #${nuevaDevolucion.devonum} Orden de retiro ${createDevolucionDto?.artdes} >>> ${createDevolucionDto?.clides}`;

                    await this.emailService.sendEmail(to, subject, body);
                } catch (err) {
                    console.error(`Fallo al enviar correo`, err);
                }
            });

            return;
        });
    }



    async getPredesBySerial(serial: string) {
        const predes = await this.mysql.dtpredes.findFirst({
            where: {
                serial1: {
                    startsWith: serial
                }
            },
            include: {
                cbpredes: {
                    select: {
                        prednum: true,
                        pednum: true,
                        fecemis: true,
                        fecdesp: true,
                        codzon: true,
                        codcli: true,
                        codven: true,

                    }
                }
            }
        }) as DtPredes;

        return predes;
    }

    private async ensureDirectoryExists(directory: string) {
        await mkdir(directory, { recursive: true });
    }

    async downloadWebpImage(url: string, customDirectory?: string): Promise<string> {
        if (!url) {
            throw new Error('Image URL not provided.');
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to download image ${url}: ${response.status} ${response.statusText}`);
        }

        const buffer = Buffer.from(await response.arrayBuffer());

        const directory = this.baseDir;
        await this.ensureDirectoryExists(directory);

        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        let filename = path.basename(pathname);
        if (!filename.endsWith('.webp')) {
            filename += '.webp';
        }
        const filePath = path.join(directory, filename);
        await writeFile(filePath, buffer);
        return filename;
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


    /**
         * Construye el cuerpo y los attachments para el correo de nota de retiro.
         * @param devol Objeto con los datos de la devolución
         * @param images Array con los nombres de las imágenes
         * @param rif RIF del cliente
         * @param dirretiro Dirección de retiro
         * @param telefono Teléfono de contacto
         */
    async buildCollectionNoteEmail(
        devol: any,
        images: string[],
        rif: string,
        dirretiro: string,
        telefono: string

    ): Promise<string> {


        const {
            clides,
            codart,
            artdes,
            serial1,
            factnum,
            motivo,
            codcli,
            obsregistro,
            registradopor,
            fecharegistro,

        } = devol;



        let body = `
                    <hr>
                    <p>Se requiere gestionar el retiro del siguiente art&iacute;culo en la tienda del cliente &nbsp;<b><i>${clides}</i></b></p>
                    <p>RIF &nbsp;<b><i>${rif}</i></b></p>
                    <p>C&Oacute;DIGO &nbsp;<b><i>${codcli}</i></b></p>
                    <p>DIRECCI&Oacute;N &nbsp;<b><i>${dirretiro}</i></b></p>
                    <p>TEL&Eacute;FONO &nbsp;<b><i>${telefono}</i></b></p>
                    <br><br>



                    <div style='text-align: center;'>
                      <table style='margin: 0 auto; border-collapse: collapse; width: 90%; font-family: Arial, sans-serif;' border='1' cellpadding='5'>
                        <thead style='background-color: #f2f2f2;'>
                          <tr>
                            <th style='width: 8%;'>CODIGO</th>
                            <th style='width: 20%;word-wrap: break-word;'>DESCRIPCI&Oacute;N ART&iacute;CULO</th>
                            <th style='width: 8%;'>No. FACTURA</th>
                            <th style='width: 8%;'>CANTIDAD</th>
                            <th style='width: 10%;'>SERIAL</th>
                            <th style='width: 15%;'>MOTIVO</th>
                            <th style='width: 15%;'>OBSERVACI&Oacute;N</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td align='center'>${codart}</td>
                            <td align='left' style='word-wrap: break-word;'>${artdes}</td>
                            <td align='center'>${factnum}</td>
                            <td align='center'>1</td>
                            <td align='center'>${serial1}</td>
                            <td align='center'>${motivo}</td>
                            <td style='word-wrap: break-word;'>${obsregistro}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div style='margin-top: 20px; text-align: center;'>
                        <p><b>Evidencia Fotográfica:</b></p>
                        ${images.length > 0
                ? images
                    .map(
                        (url) =>
                            `<img src="${url}" style="max-width: 200px; height: 200px; border: 1px solid #ccc; margin: 5px;" />`
                    )
                    .join('') : `<p></p>`}
            
                    </div>

                <br><br>
                <p>Registrado por: &nbsp;<b>${registradopor}</b><br>
                Fecha registro: &nbsp;<b>${fecharegistro.toLocaleDateString()}</b></p>
                `;

        return body;
    }

}