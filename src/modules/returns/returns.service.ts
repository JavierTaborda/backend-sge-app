import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { EmailService } from 'src/email/email.service';

import { DateUtils } from 'src/utils/date.utils';
import { getVzlaDateForDB } from 'src/utils/date.venezuela.db';
import { CbDevolucionDto } from './dtos/create-devolucion.dto';
import { MotiveItemDto } from './dtos/motive.dto';
import { ReturnByFactDto } from './dtos/returnbyfact.dts';
import { ReturnBySerialDto } from './dtos/returnbyserial.dto';
import { ReturnsEmailTemplateService } from './returns-email-template.service';
import { ReturnsImageStorageService } from './returns-image-storage.service';
import { CodMotives } from './types/CodMotives';
import { DtPredes } from './types/dtpredes';


@Injectable()
export class ReturnsService {
    constructor(
        private readonly sql: SQLServerPrismaService,
        private readonly mysql: MySQLPrismaService,
        private readonly emailService: EmailService,
        private readonly returnsImageStorageService: ReturnsImageStorageService,
        private readonly returnsEmailTemplateService: ReturnsEmailTemplateService,
    ) { }


    async getOrderByFactNumber(fact_number?: number) {

        if (!fact_number) {
            throw new Error("fact_number is required to fetch the order.");
        }

        const pedNumber = await this.getPednumByFactNumber(fact_number);

        if (pedNumber === 0) {
            return null;
        }


        const order = await this.getOrder(pedNumber);
        if (!order) {
            return null;
        }

        const cbpredes = await this.getCbpredesByPednum(pedNumber);
        const zoneDescription = await this.getZoneDescription(cbpredes?.codzon);
        const barcodes = await this.getBarcodesByArticles(order.reng_ped.map(r => r.co_art));

        const result: ReturnByFactDto = {
            fact_num: fact_number,
            fecemis: order?.fec_emis as Date,
            codcli: order?.cliente?.co_cli ?? '',
            clides: order?.cliente?.cli_des ?? '',
            codven: order?.vendedor?.co_ven ?? '',
            vendes: order?.vendedor?.ven_des ?? '',

            art: (order?.reng_ped ?? []).map(r => ({
                co_art: r.co_art?.trim() ?? '',
                art_des: r.art?.art_des?.trim() ?? '',
                codbarra: barcodes.find(b => b.codart === r.co_art)?.codbarra ?? ''
            })),
  
             rif : order?.cliente?.rif ?? '',
             telefonos : order?.cliente?.telefonos ?? '',
             email : order?.cliente?.email ?? '',
             dir_ent2 : order?.cliente?.dir_ent2 ?? '',
             prednum : cbpredes?.prednum ?? 0,
             pednum : cbpredes?.pednum ?? 0,
             zondes: zoneDescription,
             codzon: cbpredes?.codzon ?? '',
                fecdesp: cbpredes?.fecdesp as Date,

        }      
           

        return result;

    }
    async getDataBySerial(serial: string): Promise<ReturnBySerialDto | null> {

        const checkSerial = await this.checkSerial(serial);
        if (checkSerial) {
            throw new Error(`El serial ${serial} ya ha sido registrado en el sistema con la devolución número ${checkSerial.devonum}.`);
        }

        const predes = await this.getPredesBySerial(serial);

        if (predes == null) {
            return null;
        }

        const order = await this.getOrder(predes?.pednum, predes?.codart);
        const zoneDescription = await this.getZoneDescription(predes?.cbpredes?.codzon);
        const factNum = await this.getFactNumberByPednum(predes?.pednum);



        const data: ReturnBySerialDto = {
            fact_num: factNum,
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
            zondes: zoneDescription,
            codzon: predes?.cbpredes?.codzon ?? ''

        }

        return data
    }


    async createReturn(createDevolucionDto: CbDevolucionDto, codven?: string, nameUser?: string, userid_sge?: string) {
        if (!createDevolucionDto) {
            throw new Error("Return data not provided.");
        }

        if (createDevolucionDto.serial1) {
            const checkSerial = await this.checkSerial(createDevolucionDto.serial1);

            if (checkSerial) {
                throw new Error(`El serial ${createDevolucionDto.serial1} ya ha sido registrado en el sistema con la devolución número ${checkSerial.devonum}.`);
            }

        }


        // Get seller data (Outside the transaction to avoid locking tables)

        let vendesValue = '', finalCodVen = '';

        if (createDevolucionDto.dtdevolucion.codven && createDevolucionDto.dtdevolucion.codven != 'N/A'
            && createDevolucionDto.dtdevolucion.vendes) {
            finalCodVen = createDevolucionDto.dtdevolucion.codven.trim();
            vendesValue = createDevolucionDto.dtdevolucion.vendes.trim();
        } else if (!createDevolucionDto.dtdevolucion.vendes && createDevolucionDto.factnum) {
            const pednum = await this.getPednumByFactNumber(createDevolucionDto.factnum);


            if (pednum > 0) {
                const pedido = await this.sql.pedidos.findFirst({
                    where: { fact_num: pednum },
                    select: {
                        co_ven: true,
                        vendedor: { select: { ven_des: true } }
                    }
                });

                if (pedido?.co_ven) {
                    finalCodVen = pedido.co_ven.trim();
                    vendesValue = pedido.vendedor?.ven_des?.trim() ?? '';
                }

                const dispatchQuery = `SELECT d.pednum, d.prednum, fecdesp AS fechadespacho, codzon
                    FROM dtpredes d 
                    LEFT JOIN cbpredes c ON c.prednum = d.prednum 
                    WHERE d.pednum = ${pednum} LIMIT 1;`;

                const dispatch = await this.mysql.$queryRawUnsafe<{ pednum: number; prednum: number; fechadespacho: string; codzon: string }[]>(dispatchQuery);

                const zoneDescription = await this.getZoneDescription(dispatch?.[0]?.codzon ?? '');

                createDevolucionDto.dtdevolucion.pednum = pednum;
                createDevolucionDto.dtdevolucion.fechadespacho = dispatch?.[0]?.fechadespacho ?? '';
                createDevolucionDto.dtdevolucion.tiempofactura = DateUtils.getElapsedTimeText(dispatch?.[0]?.fechadespacho ?? new Date(), new Date());
                createDevolucionDto.dtdevolucion.prednum = dispatch?.[0]?.prednum ?? 0;
                createDevolucionDto.dtdevolucion.codzon = dispatch?.[0]?.codzon ?? '';
                createDevolucionDto.dtdevolucion.zondes = zoneDescription;

            }


            if (!finalCodVen && createDevolucionDto.dtdevolucion.codven) {
                finalCodVen = createDevolucionDto.dtdevolucion.codven.trim();
            }
        } else {
            finalCodVen = codven ? codven : ''

            const vendedor = await this.sql.vendedor.findFirst({
                select: { ven_des: true },
                where: { co_ven: finalCodVen ? { startsWith: finalCodVen } : undefined }
            });
            vendesValue = vendedor?.ven_des ?? '';
        }

        const ownerUserId = userid_sge ? parseInt(userid_sge, 10) : 1;


        let images: string[] = [];


        return await this.mysql.$transaction(async (tx) => {

            // Separate header from detail
            const { dtdevolucion, rif, telefono, dirretiro, ...cabeceraData } = createDevolucionDto;

            //  Create Header
            const nuevaDevolucion = await tx.cbdevolucion.create({
                data: { ...cabeceraData, fecharegistro: getVzlaDateForDB(cabeceraData.fecharegistro), owneruser: ownerUserId },
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


                            const savedPath = await this.returnsImageStorageService.downloadWebpImage(url);
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
                    const body = this.returnsEmailTemplateService.buildCollectionNoteEmail(
                        nuevaDevolucion,
                        images,
                        rif || '',
                        dirretiro || '',
                        telefono || ''

                    );

                    const to = ['jtaborda@cyberlux.com.ve', 'sgoldche@gmail.com', 'neivymatie@gmail.com', 'martinezcrismary@gmail.com', 'marqzrebeca@gmail.com', 'sgoldcheidt@cyberlux.com.ve', 'oscaragd496@gmail.com'];

                    const subject = `Orden de retiro devolución #${nuevaDevolucion.devonum} ${createDevolucionDto?.artdes} ___ ${createDevolucionDto?.clides}`;

                    await this.emailService.sendEmail('jtaborda@cyberlux.com.ve', subject, body);
                } catch (err) {
                    console.error(`Fallo al enviar correo`, err);
                }
            });

            return;
        }, {
            maxWait: 15000,
            timeout: 10000,
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

    async checkSerial(serial: string): Promise<{ serial1: string; devonum: number } | null> {

        const checkSerial = await this.mysql.cbdevolucion.findFirst({
            where: {
                serial1: serial
            }, select: { serial1: true, devonum: true }

        });
        return checkSerial;
    }


    private async getZoneDescription(codzon?: string | null): Promise<string> {
        if (!codzon) {
            return '';
        }

        const zone = await this.mysql.clzonas.findFirst({
            where: {
                codzon
            },
            select: {
                zondes: true
            }
        });

        return zone?.zondes ?? '';
    }

    private async getFactNumberByPednum(pednum?: number | null): Promise<number> {
        const db = process.env.SQLSERVER_DATABASE;
        const pednumValue = Number(pednum);

        if (!db || Number.isNaN(pednumValue) || pednumValue <= 0) {
            return 0;
        }

        const factNumQuery = `WITH BusquedaDocumentos AS (
            SELECT rf.fact_num AS Document, 1 AS Prioridad FROM ${db}.dbo.reng_nde rn
            INNER JOIN ${db}.dbo.reng_fac rf ON rn.fact_num = rf.num_doc
            WHERE rn.num_doc = ${pednumValue}
            UNION ALL
            SELECT fact_num AS Document, 2 AS Prioridad FROM ${db}.dbo.reng_nde
            WHERE num_doc = ${pednumValue})
            SELECT TOP 1 Document FROM BusquedaDocumentos ORDER BY Prioridad ASC, Document ASC;`;

        const factNumResult = await this.sql.$queryRawUnsafe<{ Document: number }[]>(factNumQuery);

        return factNumResult.length > 0 ? factNumResult[0].Document : 0;
    }

    private async getPednumByFactNumber(factnum?: number | string | null): Promise<number> {
        const db = process.env.SQLSERVER_DATABASE;
        const factNumValue = Number(factnum);

        if (!db || Number.isNaN(factNumValue) || factNumValue <= 0) {
            return 0;
        }



        const pedNumQuery = `
            WITH BusquedaPedidos AS (
            SELECT rn.num_doc AS Document, 1 AS Prioridad
            FROM ${db}.dbo.reng_nde rn
            INNER JOIN ${db}.dbo.reng_fac rf ON rn.fact_num = rf.num_doc
            WHERE rf.fact_num = ${factNumValue}
            UNION ALL
            SELECT num_doc AS Document, 2 AS Prioridad
            FROM ${db}.dbo.reng_nde
            WHERE fact_num = ${factNumValue}
            )
            SELECT TOP 1 Document 
            FROM BusquedaPedidos
            ORDER BY Prioridad ASC, Document ASC;
        `;

        const pedResult = await this.sql.$queryRawUnsafe<{ Document: number }[]>(pedNumQuery);

        return pedResult.length > 0 ? pedResult[0].Document : 0;
    }

    private async getOrder(pednum?: number | null, codart?: string | null) {
        const pednumValue = Number(pednum);

        if (Number.isNaN(pednumValue) || pednumValue <= 0) {
            return null;
        }

        return this.sql.pedidos.findFirst({
            where: {
                fact_num: pednumValue,
            },
            select: {
                fact_num: true,
                fec_emis: true,

                reng_ped: {
                    where: {
                        co_art: codart ?? undefined
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
                        rif: true,
                        co_cli: true,
                    }
                },
                vendedor: {
                    select: {
                        ven_des: true,
                        co_ven: true,
                    }
                },

            }
        });
    }

    private async getCbpredesByPednum(pednum?: number | null) {
        const pednumValue = Number(pednum);

        if (Number.isNaN(pednumValue) || pednumValue <= 0) {
            return null;
        }

        return this.mysql.cbpredes.findFirst({
            where: {
                pednum: pednumValue
            },
            select: {
                codzon: true,
                codcli: true,
                fecdesp: true,
                fecemis: true,
                pednum: true,
                prednum: true,

            }
        });
    }

    private async getBarcodesByArticles(articles: Array<string | null>): Promise<Array<{ codart: string; codbarra: string | null }>> {


        const codes = articles
            .map(article => article?.trim() ?? '')
            .filter(code => code.length > 0);

        if (codes.length === 0) {
            return [];
        }

        return this.mysql.mtarticulos.findMany({
            where: {
                codart: { in: codes }
            },
            select: {
                codart: true,
                codbarra: true
            }
        });
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