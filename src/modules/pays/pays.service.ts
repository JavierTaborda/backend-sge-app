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

  async authorizedDocuments(createAuthDocuments: PlanPagosBase[]) {
    // if (!createAuthDocuments) {
    //   throw new Error("Datos de devolución no proporcionados.");
    // }

    // if (!createAuthDocuments) {
    //   if (!codven || codven.trim().length === 0) {
    //     throw new Error("Código de vendedor no proporcionado.");
    //   }

    //   const vendedor = await this.sql.vendedor.findFirst({
    //     select: { ven_des: true },
    //     where: { co_ven: { startsWith: codven } }
    //   });

    //   createAuthDocuments.vendes = vendedor?.ven_des ?? 'Sin descripción';
    // }

    // const nuevaDevolucion = await this.mysql.mvdevolucion.create({
    //   data: createAuthDocuments
    // });

    return true;
  }
  async createPlanPagos(createPlan: PlanifcacionPagos) {
    if (!createPlan || createPlan.items.length === 0) {
      throw new Error('Datos de plan de pagos no proporcionados.');
    }

    const maxPlanPago = await this.mysql.cbplanpagos.aggregate({
      _max: { planpagonumero: true },
    });

    const LastPlan = maxPlanPago._max.planpagonumero ?? 0;
    const newPlan = LastPlan + 1;

    const documentsAuthPlan = await this.mysql.dtplanpagos.createMany({
      data: createPlan.items.map((plan) => ({
        ...plan,
        planpagonumero: newPlan,
        autorizadopagar: plan.autorizadopagar ? true : false,
      })),
    });
    if (documentsAuthPlan.count > 1) {
      const newPlanPago = await this.mysql.cbplanpagos.create({
        data: {
          planpagonumero: newPlan,
          unidad: createPlan.unidad,
          empresa: createPlan.empresa,
          fechapagoautorizada: createPlan.fechapagoautorizada,
          descripcionplan: createPlan.descripcionplan,
          fechaautorizadopor: createPlan.fechaautorizadopor,
          autorizadopor: createPlan.autorizadopor,
          totalnetobsd: createPlan.totalnetobsd,
          totalnetousd: createPlan.totalnetousd,
          totalsaldobsd: createPlan.totalsaldobsd,
          totalsaldousd: createPlan.totalsaldousd,
          totalautorizadobsd: createPlan.totalautorizadobsd,
          totalautorizadousd: createPlan.totalautorizadousd,
          totalpagadobsd: createPlan.totalpagadobsd,
          totalpagadousd: createPlan.totalpagadousd,
          totalxpagarbsd: createPlan.totalxpagarbsd,
          totalxpagarusd: createPlan.totalxpagarusd,
          generadotxt: false,
          conciliadopago: false,
          owneruser: createPlan.owneruser,
        },
      });

      return {
        success: true,
        planpagonumero: newPlan,
      };
    }
  }
}
