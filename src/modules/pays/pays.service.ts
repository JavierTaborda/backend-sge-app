import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { TestMySQLPrismaService } from 'src/database/testmysql.service';
import { getVzlaDateForDB } from 'src/utils/date.venezuela.db';
import { MethodPayDto } from './dto/method.pay.dto';
import { CodeSwiftDto } from './dto/swift.dto';
import { mergeDocuments } from './helpers/mergeDocuments';
import { ExcludeDocuments } from './interfaces/ExcludeDocuments';
import { PlanPagosBase } from './interfaces/PlanPasgosBase';
import { PlanifcacionPagos } from './interfaces/PlanificacionPagos';


@Injectable()
export class PaysService {
  constructor(
    private readonly sql: SQLServerPrismaService,
    private readonly mysql: TestMySQLPrismaService, //TODO:ChangetoMySql when the test end
  ) { }

  async getPendingDocs() {
    //const resultSQL = await this.getDocumentsInProfitSQL();
    const resultSQL = [];
    const resultHsPlanPagos = await this.getDocumentsInHsPlanPago();
    const resultMvPlanPagos = await this.getDocumentsInMemoryMvPlanPagos();

    const merge = mergeDocuments(
      resultSQL,
      resultHsPlanPagos,
      resultMvPlanPagos,
    );


    const docsToExclude: ExcludeDocuments[] = await this.getDocumentstoFilterDtPlanPagos(merge);

    const filteredMerge = merge.filter(
      (doc) =>
        !docsToExclude.some(
          (ex) =>
            ex.tipodocumento === doc.tipodocumento &&
            ex.numerodocumento === Number(doc.numerodocumento) &&
            ex.empresa === doc.empresa &&
            ex.unidad === doc.unidad
        ),
    );

    return filteredMerge;
  }

  async getDocumentsInProfitSQL(): Promise<PlanPagosBase[]> {
    const db = process.env.SQLSERVER_DATABASE;
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
      FROM ${db}.dbo.docum_cp a
      LEFT JOIN ${db}.dbo.prov b ON b.co_prov = a.co_cli
      LEFT JOIN MasterProfit.dbo.employee c ON c.employee_i = a.co_us_in
      LEFT JOIN ${db}.dbo.tipo_pro d ON d.tip_pro = b.tipo
      LEFT JOIN ${db}.dbo.segmento m ON m.co_seg = b.co_seg
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
      origenhes: true,
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

    }));

    return result;
  }

  async getDocumentstoFilterDtPlanPagos(
    listDocuments: PlanPagosBase[],
  ): Promise<ExcludeDocuments[]> {
    if (!listDocuments || listDocuments.length === 0) return [];

    const compositeKeys = listDocuments.map((doc) => ({
      tipodocumento: doc.tipodocumento,
      numerodocumento: Number(doc.numerodocumento),
      unidad: doc.unidad,
      empresa: doc.empresa,

    }));

    const result = await this.mysql.dtplanpagos.findMany({
      where: {
        OR: compositeKeys.map((key) => ({
          tipodocumento: key.tipodocumento,
          numerodocumento: key.numerodocumento,
          unidad: key.unidad,
          empresa: key.empresa,
          conciliadopago: false
        })),
      },
      select: {
        tipodocumento: true,
        numerodocumento: true,
        empresa: true,
        unidad: true
      },
    });

    return result.map((doc) => ({
      tipodocumento: doc.tipodocumento,
      numerodocumento: Number(doc.numerodocumento),
      empresa: doc.empresa,
      unidad: doc.unidad
    }));
  }

  async findMethodPay() {
    const methods = await this.mysql.clmetodopago.findMany({
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

  async findCodesSwift() {
    const codesSwift = await this.mysql.clbancoswift.findMany()
    return plainToInstance(CodeSwiftDto, codesSwift, {
      enableImplicitConversion: true,
    });
  }


  async authorizedDocuments(
    docs: PlanPagosBase[],
  ): Promise<{ success: boolean; total: number }> {
    if (!docs || docs.length === 0) {
      throw new Error("No hay documentos a autorizar.");
    }

    const operations = docs.map((doc) => {
      const {
        pagado,
        fechapagado,
        generadotxt,
        enviadocajachica,
        conciliadopago,
        cob_num,
        moneda_pago,
        monto_pago,
        ...safeDoc
      } = doc;

      const whereClause = {
        numerodocumento: safeDoc.numerodocumento,
        unidad: safeDoc.unidad,
        empresa: safeDoc.empresa,
        tipodocumento: safeDoc.tipodocumento,
      };

     
      if (!safeDoc.autorizadopagar) {
        return this.mysql.mvplanpagos.deleteMany({
          where: whereClause,
        });
      }

    
      const date = doc.fechaautorizadopor
        ? new Date(doc.fechaautorizadopor)
        : new Date();

      const fechaVzlaAdjusted = getVzlaDateForDB(date);

      return this.mysql.mvplanpagos.upsert({
        where: whereClause,
        update: {
          ...safeDoc,
          autorizadopagar: true,
          fechaautorizadopor: fechaVzlaAdjusted,  
        },
        create: {
          ...safeDoc,
          autorizadopagar: true,
          fechaautorizadopor: fechaVzlaAdjusted,
        },
      });
    });

    try {
      await this.mysql.$transaction(operations);

      return {
        success: true,
        total: docs.length,
      };
    } catch (error) {
      console.error("Error autorizando documentos:", error);
      throw new Error("No se pudieron autorizar los documentos.");
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


      const datevzlaAdjusted = getVzlaDateForDB();

      let validEmpresa = true;
      let validUnidad = true;


      const totals = createPlan.items.reduce(
        (acc, item) => {
          const isUSD = item.monedaautorizada?.startsWith("USD");
          const isUSDSaldo = item.moneda?.startsWith("USD");

          const neto = Number(item.montoneto) || 0;
          const saldo = Number(item.montosaldo) || 0;
          const auth = Number(item.montoautorizado) || 0;
          const xpagado = Number(item.montoautorizado) || 0;


          if (createPlan.items[0].empresa != item.empresa || createPlan.items[0].unidad != item.unidad) {
            validEmpresa = false;
          }
          if ( createPlan.items[0].unidad != item.unidad) {
            validUnidad = false;
          }


          if (isUSD) {
         
            acc.totalautorizadousd += auth;
            if (item.pagado) {
              acc.totalpagadousd += xpagado;
            } else {
              acc.totalxpagarusd += xpagado;
            }
          } else {
       
            acc.totalautorizadobsd += auth;
            if (item.pagado) {
              acc.totalpagadobsd += xpagado;
            } else {
              acc.totalxpagarbsd += xpagado;
            }
          }

          if (isUSDSaldo) {
            acc.totalnetousd += neto;
            acc.totalsaldousd += saldo;

          } else {
            acc.totalnetobsd += neto;
            acc.totalsaldobsd += saldo;

          }

          return acc;
        },
        {
          totalnetobsd: 0,
          totalnetousd: 0,
          totalsaldobsd: 0,
          totalsaldousd: 0,
          totalautorizadobsd: 0,
          totalautorizadousd: 0,
          totalpagadobsd: 0,
          totalpagadousd: 0,
          totalxpagarbsd: 0,
          totalxpagarusd: 0,
        },
      );

      await tx.cbplanpagos.create({
        data: {
          planpagonumero: newPlan,
          unidad: validUnidad ? createPlan.items[0].unidad : "CORPORATIVO",
          empresa: validEmpresa ? createPlan.items[0].empresa : "CORPORATIVO",
          fechapagoautorizada: createPlan.fechapagoautorizada,
          descripcionplan: createPlan.descripcionplan,
          fechaautorizadopor: datevzlaAdjusted,
          autorizadopor: createPlan.autorizadopor,
          generadotxt: false,
          conciliadopago: false,
          owneruser: createPlan.owneruser,
          ...totals,
        },
      });

      const documentsAuthPlan = await tx.dtplanpagos.createMany({
        data: createPlan.items.map((plan) => ({
          ...plan,
          planpagonumero: newPlan,
          fechaautorizadopor: getVzlaDateForDB(plan.fechaautorizadopor ?? undefined),
          autorizadopagar: !!plan.autorizadopagar,
        })),
      });


      if (documentsAuthPlan.count === 0) {
        throw new Error('No se pudieron registrar los documentos del plan.');
      }

      await tx.mvplanpagos.deleteMany({
        where: {
          OR: createPlan.items.map((plan) => ({
            numerodocumento: plan.numerodocumento,
            unidad: plan.unidad,
            empresa: plan.empresa,
            tipodocumento: plan.tipodocumento,
          })),
        },
      });

      return {
        success: true,
        planpagonumero: newPlan,
      };
    });
  }
}
