import { Injectable } from '@nestjs/common';

type CollectionEmailInput = {
  clides: string | null;
  codart: string | null;
  artdes: string | null;
  serial1: string | null;
  factnum: number | null;
  motivo: string | null;
  codcli: string | null;
  obsregistro: string | null;
  registradopor: string | null;
  fecharegistro: Date | string | null;
};

@Injectable()
export class ReturnsEmailTemplateService {
    buildCollectionNoteEmail(
        devol: CollectionEmailInput,
        images: string[],
        rif: string,
        dirretiro: string,
        telefono: string,
    ): string {
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

        const fechaStr = fecharegistro instanceof Date
            ? fecharegistro.toLocaleDateString()
            : fecharegistro;

        const fotosHtml = images.length > 0
            ? images.map(url =>
                `<img src="${url}" style='max-width: 200px; height: 200px; border: 1px solid #ccc;' />`,
            ).join('')
            : '';

        return `
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
                <th style='width: 20%; word-wrap: break-word;'>DESCRIPCI&Oacute;N ART&iacute;CULO</th>
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
            <p><b>Evidencia Fotogr&aacute;fica:</b></p>
            ${fotosHtml}
        </div>

        <br><br>
        <p>Registrado por: &nbsp;<b>${registradopor}</b><br>
        Fecha registro: &nbsp;<b>${fechaStr}</b></p>
    `;
    }
}
