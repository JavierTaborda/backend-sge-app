import { BadRequestException, Injectable } from '@nestjs/common';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { getVzlaDateForDB } from 'src/utils/date.venezuela.db';

export interface AccountReceivableRow {
  renglon: string;
  tipo_doc: string;
  nro_doc: number;
  moneda: string;
  monto: number;
  fec_emis: Date;
  co_cli: string;
  cli_des: string;
  observa: string | null;
  origen: string | null;
  origen_d: string | null;
}

export interface AccountReceivableSummary {
  co_cli: string;
  cli_des: string;
  mont_cre: number;
  monto: number;
  diferencia: number;
}

@Injectable()
export class AccountsReceivableService {
  constructor(private readonly sql: SQLServerPrismaService) {}

  async findByClient(
    clientCode?: string,
    role?: string,
    codven?: string,
  ): Promise<AccountReceivableRow[]> {
    if (!clientCode?.trim()) {
      throw new BadRequestException('El codigo del cliente es requerido.');
    }
 

    const database = process.env.SQLSERVER_DATABASE;
    const vendorScoped = (role === '5' || role === '4') && !!codven;
    const vendorFilter = vendorScoped ? 'AND c.co_ven = @P2' : '';
    const query = `
      SELECT
        'Cuentas x Cobrar' AS renglon,
        CASE
          WHEN d.tipo_doc LIKE 'AJP%' THEN 'AJUSTE POSITIVO'
          WHEN d.tipo_doc LIKE 'AJN%' THEN 'AJUSTE NEGATIVO'
          WHEN d.tipo_doc LIKE 'N/CR%' THEN 'NOTA DE CREDITO'
          WHEN d.tipo_doc LIKE 'FACT%' THEN 'FACTURA'
          ELSE d.tipo_doc
        END AS tipo_doc,
        d.nro_doc,
        d.moneda,
        CAST(
          (d.saldo * CASE
            WHEN d.tipo_doc IN ('N/DB','GIRO','CHEQ','FACT','AJPA','AJPM') THEN 1
            ELSE -1
          END) / d.tasa
          AS DECIMAL(18,2)
        ) AS monto,
        d.fec_emis,
        d.co_cli,
        c.cli_des,
   
        LTRIM(RTRIM(
          REPLACE(
            REPLACE(
              REPLACE(
                REPLACE(
                  REPLACE(d.observa, CHAR(160), ' '),
                CHAR(9), ' '),
              '  ', ' ' + CHAR(7)),
            CHAR(7) + ' ', ''),
          CHAR(7), '')
        )) AS observa,
        d.origen,
        d.origen_d
      FROM ${database}.dbo.docum_cc AS d
      INNER JOIN ${database}.dbo.clientes AS c
        ON c.co_cli = d.co_cli
      WHERE d.anulado = 0
        AND d.saldo > 0
        AND d.tasa > 1
        AND d.co_cli = @P1
        
        ${vendorFilter}

        ORDER BY d.fec_emis DESC
    `;

    const params = vendorScoped
      ? [clientCode.trim(), codven.trim()]
      : [clientCode.trim()];
    const rows = await this.sql.$queryRawUnsafe<AccountReceivableRow[]>(query, ...params);
    return rows.map((row) => ({
      ...row,
      fec_emis: getVzlaDateForDB(
        new Date(row.fec_emis.getTime() + 4 * 60 * 60 * 1000),
      ),
    }));
  }

  async findAll(role?: string, codven?: string): Promise<AccountReceivableSummary[]> {
    const database = process.env.SQLSERVER_DATABASE;
    const vendorScoped = (role === '5' || role === '4') && !!codven;
    const vendorFilter = vendorScoped ? 'AND c.co_ven = @P1' : '';
    const query = `
      SELECT DISTINCT
        d.co_cli,
        c.cli_des,
        c.mont_cre,
        SUM(CAST(
          (d.saldo * CASE
            WHEN d.tipo_doc IN ('N/DB','GIRO','CHEQ','FACT','AJPA','AJPM') THEN 1
            ELSE -1
          END) / NULLIF(d.tasa, 0)
          AS DECIMAL(18,2)
        )) AS monto,
        CAST(
          c.mont_cre - SUM(
            (d.saldo * CASE
              WHEN d.tipo_doc IN ('N/DB','GIRO','CHEQ','FACT','AJPA','AJPM') THEN 1
              ELSE -1
            END) / NULLIF(d.tasa, 0)
          )
          AS DECIMAL(18,2)
        ) AS diferencia
      FROM ${database}.dbo.docum_cc AS d
      INNER JOIN ${database}.dbo.clientes AS c
        ON c.co_cli = d.co_cli
      WHERE d.anulado = 0
        AND d.co_cli NOT IN ('00261','00470','00485','00494','00510','00304','00511', 'GEN01', 'GEN02', '00514', '00512','00646') AND d.saldo > 0 
        AND d.tasa >1 
        ${vendorFilter}
      
      GROUP BY d.co_cli, c.cli_des, c.mont_cre
    `;

    return vendorScoped
      ? this.sql.$queryRawUnsafe<AccountReceivableSummary[]>(query, codven.trim())
      : this.sql.$queryRawUnsafe<AccountReceivableSummary[]>(query);
  }
}