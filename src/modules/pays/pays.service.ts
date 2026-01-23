import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { MethodPayDto } from './dto/method.pay.dto';
import { mergeDocuments } from './helpers/mergeDocuments';
import { PlanPagosBase } from './interfaces/PlanPasgosBase';
import { PlanifcacionPagos } from './interfaces/PlanificacionPagos';

@Injectable()
export class PaysService {
  constructor(
    private readonly sql: SQLServerPrismaService,
    private readonly mysql: MySQLPrismaService,
  ) {}

  async getPendingDocs() {
    const resultSQL = await this.getDocumentsInProfitSQL();
    const resultHsPlanPagos = await this.getDocumentsInHsPlanPago();
    const resultMvPlanPagos = await this.getDocumentsInMemoryMvPlanPagos();

    const merge = mergeDocuments(
      resultSQL,
      resultHsPlanPagos,
      resultMvPlanPagos,
    );

    const docsToExclude = await this.getDocumentstoFilterDtPlanPagos(merge);

    const filteredMerge = merge.filter(
      (doc) =>
        !docsToExclude.some(
          (ex) =>
            ex.tipodocumento === doc.tipodocumento &&
            ex.numerodocumento === Number(doc.numerodocumento),
        ),
    );

    return filteredMerge;
  }

  async getDocumentsInProfitSQL(): Promise<PlanPagosBase[]> {
    const result = await this.sql.$queryRawUnsafe<PlanPagosBase[]>(`
      SELECT 
        'FRIGILUX' AS unidad,
        'EMDOM II' AS empresa,
        tipo_doc AS tipodocumento,
        nro_doc AS numerodocumento,
        RTRIM(a.co_cli) AS codigobeneficiario,
        RTRIM(b.prov_des) AS beneficiario,
        CASE WHEN b.campo4 <> '' THEN RTRIM(b.campo4) ELSE RTRIM(fax) END AS cuentabanco,
        CASE WHEN b.campo3 <> '' THEN RTRIM(b.campo3) ELSE RTRIM(nit) END AS banco,
        CASE WHEN b.campo2 <> '' THEN RTRIM(b.campo2) ELSE RTRIM(rif) END AS rifproveedor,
        CASE WHEN b.campo1 <> '' THEN RTRIM(b.campo1) ELSE RTRIM(b.prov_des) END AS titularcuenta,
        RTRIM(d.des_tipo) AS tipoproveedor,
        pagar AS autorizadopagar,
        'Pendiente' AS profite,
        RTRIM(last_name) AS registradopor,
        fec_emis AS fechaemision,
        fec_venc AS fechavencimiento,
        a.fe_us_mo AS fecharegistro,
        nro_fact AS numerofactura,
        RTRIM(observa) AS observacion,
        tasa AS tasacambio,
        CASE moneda WHEN 'BSD' THEN 'VED' WHEN 'US$' THEN 'USD' END AS moneda,
        CASE WHEN moneda = 'US$' THEN ROUND(monto_net/tasa,2) ELSE monto_net END AS montoneto,
        CASE WHEN moneda = 'US$' THEN ROUND(a.saldo/tasa,2) ELSE a.saldo END AS montosaldo,
        CASE WHEN a.campo2 <> '' THEN RTRIM(a.campo2) ELSE RTRIM(m.seg_des) END AS monedaproveedor,
        RTRIM(b.campo5) AS tipocuenta,
        RTRIM(a.campo1) AS clasegasto,
        'No planificado' AS planificado,
        0 AS origenhes,
        null AS linkproforma,
        40 AS owneruser,
        0 AS keyfile
      FROM PASSVE_A.dbo.docum_cp a
      LEFT JOIN PASSVE_A.dbo.prov b ON b.co_prov = a.co_cli
      LEFT JOIN MasterProfit.dbo.employee c ON c.employee_i = a.co_us_in
      LEFT JOIN PASSVE_A.dbo.tipo_pro d ON d.tip_pro = b.tipo
      LEFT JOIN PASSVE_A.dbo.segmento m ON m.co_seg = b.co_seg
      WHERE anulado = 0 
        AND tipo_doc IN ('AJPM','FACT','N/DB') 
        AND a.saldo > 0
    `);
    return result;
  }

  async getDocumentsInHsPlanPago(): Promise<PlanPagosBase[]> {
    const hsplanpagos = await this.mysql.hsplanpagos.findMany({
      where: {
        montosaldo: { gt: 0 },
      },
    });

    const mapMySQL = hsplanpagos.map((item) => ({
      ...item,
      rifproveedor: item.rifproveedor ? item.rifproveedor : '',
      bancopagador: '',
      autorizadopagar: item.autorizadopagar ? 1 : 0,
      tasacambio: Number(item.tasacambio),
      montoneto: Number(item.montoneto),
      montosaldo: Number(item.montosaldo),
      origenhes: false,
      planpagonumero: 0,
      autorizadonumero: 0,
      pagado: false,
      codigoswift: null,
      fechaautorizadopor: null,
      autorizadopor: null,
      fechapagado: null,
      codigounico: 0,
      generadotxt: false,
      enviadocajachica: false,
      conciliadopago: false,
      cob_num: 0,
      tipocuenta: '00',
      moneda_pago: null,
      monto_pago: 0,
      cantidadSKU: null,
      unidades: null,
      origen: null,
      numeroPOOdoo: null,
      linkseleccion: null,
      categoria: null,
      temporada: null,
      estatuscompras: null,
      fechacompras: null,
      estatuslogistico: null,
      fechalogistico: null,
    }));
    return mapMySQL;
  }

  async getDocumentsInMemoryMvPlanPagos(): Promise<PlanPagosBase[]> {
    const documents = await this.mysql.mvplanpagos.findMany();
    const result: PlanPagosBase[] = documents.map((item) => ({
      ...item,
      autorizadopagar: item.autorizadopagar ? 1 : 0,
      tasacambio: Number(item.tasacambio),
      tasaautorizada: Number(item.tasaautorizada),
      montoneto: Number(item.montoneto),
      montoautorizado: Number(item.montoautorizado),
      montosaldo: Number(item.montosaldo),

      pagado: false,
      codigounico: 0,
      generadotxt: false,
      enviadocajachica: false,
      conciliadopago: false,
      cob_num: 0,
      monto_pago: 0,
      tipocuenta: item.tipocuenta ? item.tipocuenta : '00',
      //origenhes: 0,
      //planpagonumero: 0,
    }));

    return result;
  }

  async getDocumentstoFilterDtPlanPagos(
    listDocuments: PlanPagosBase[],
  ): Promise<{ tipodocumento: string; numerodocumento: number }[]> {
    if (!listDocuments || listDocuments.length === 0) return [];

    const compositeKeys = listDocuments.map((doc) => ({
      tipodocumento: doc.tipodocumento,
      numerodocumento: Number(doc.numerodocumento),
    }));

    const result = await this.mysql.dtplanpagos.findMany({
      where: {
        OR: compositeKeys.map((key) => ({
          tipodocumento: key.tipodocumento,
          numerodocumento: key.numerodocumento,
        })),
      },
      select: {
        tipodocumento: true,
        numerodocumento: true,
      },
    });

    return result.map((doc) => ({
      tipodocumento: doc.tipodocumento,
      numerodocumento: Number(doc.numerodocumento),
    }));
  }

  async findMethodPay() {
    const methods = await this.mysql.clbancopago.findMany({
      select: {
        codigounico: true,
        textList: true,
        pagoporbanco: true,
        bancopago: true,
        empresapagadora: true,
        monedapago: true,
      },
      orderBy: { orden: 'asc' },
    });
    return plainToInstance(MethodPayDto, methods, {
      enableImplicitConversion: true,
    });
  }
  async authorizedDocuments(docs: PlanPagosBase[]): Promise<{success: boolean;total: number;}> {
    if (!docs || docs.length === 0) {
      throw new Error('No hay documentos a autorizar.');
    }

    const operations = docs.map((doc) =>
      this.mysql.mvplanpagos.upsert({
        where: {
          numerodocumento: doc.numerodocumento,
          unidad: doc.unidad,
          empresa: doc.empresa,
          tipodocumento: doc.tipodocumento,
        },
        update: {
          autorizadopagar: true,
          fechaautorizadopor: new Date(),
          montoautorizado: Number(doc.montoneto),
          monedaautorizada: doc.moneda,
          tasaautorizada: Number(doc.tasacambio),
          empresapagadora: doc.empresa,
        },
        create: {
          ...doc,
          autorizadopagar: true,
          fechaautorizadopor: new Date(),
          montoautorizado: Number(doc.montoneto),
          monedaautorizada: doc.moneda,
          tasaautorizada: Number(doc.tasacambio),
          empresapagadora: doc.empresa,
        },
      }),
    );

    try {
      await this.mysql.$transaction(operations);

      return {
        success: true,
        total: docs.length,
      };
    } catch (error) {
      console.error('Error autorizando documentos:', error);
      throw new Error('No se pudieron autorizar los documentos.');
    }
  }

  async createPlanPagos(
    createPlan: PlanifcacionPagos,
  ): Promise<{ success: boolean; planpagonumero: number }> {
    if (!createPlan || createPlan.items.length === 0) {
      throw new Error('Datos de plan de pagos no proporcionados.');
    }

    return await this.mysql.$transaction(async (tx) => {
      const maxPlanPago = await tx.cbplanpagos.aggregate({
        _max: { planpagonumero: true },
      });

      const lastPlan = maxPlanPago._max.planpagonumero ?? 0;
      const newPlan = lastPlan + 1;

  
      // await tx.cbplanpagos.create({
      //   data: {
      //     planpagonumero: newPlan,
      //     unidad: createPlan.unidad,
      //     empresa: createPlan.empresa,
      //     fechapagoautorizada: createPlan.fechapagoautorizada,
      //     descripcionplan: createPlan.descripcionplan,
      //     fechaautorizadopor: createPlan.fechaautorizadopor,
      //     autorizadopor: createPlan.autorizadopor,
      //     totalnetobsd: createPlan.totalnetobsd,
      //     totalnetousd: createPlan.totalnetousd,
      //     totalsaldobsd: createPlan.totalsaldobsd,
      //     totalsaldousd: createPlan.totalsaldousd,
      //     totalautorizadobsd: createPlan.totalautorizadobsd,
      //     totalautorizadousd: createPlan.totalautorizadousd,
      //     totalpagadobsd: createPlan.totalpagadobsd,
      //     totalpagadousd: createPlan.totalpagadousd,
      //     totalxpagarbsd: createPlan.totalxpagarbsd,
      //     totalxpagarusd: createPlan.totalxpagarusd,
      //     generadotxt: false,
      //     conciliadopago: false,
      //     owneruser: createPlan.owneruser,
      //   },
      // });

      // const documentsAuthPlan = await tx.dtplanpagos.createMany({
      //   data: createPlan.items.map((plan) => ({
      //     ...plan,
      //     planpagonumero: newPlan,
      //     autorizadopagar: !!plan.autorizadopagar,
      //   })),
      // });

      // if (documentsAuthPlan.count === 0) {
      //   throw new Error('No se pudieron registrar los documentos del plan.');
      // }

      return {
        success: true,
        planpagonumero: newPlan,
      };
    });
  }
}
