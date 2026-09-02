export interface VeneluxSolicitudMaterialItem {
  itemnumero: string;
  codigomaterial: string;
  descripcionmaterial: string;
  marca: string | null;
  noparte: string | null;
  imagen1: string | null;
  imagen2: string | null;
  imagen3: string | null;
  coduni: string;
  unidadmedida: string;
  linea: string;
  sublinea: string;
  categoria: string;
  cantidadsolicitada: number;
  precioventa: number;
  observacion: string;
  materialnuevo: string;
  autorizado: boolean;
  fechaautorizado: string | null;
  autorizadopor: string | null;
  cantidadautorizada: number;
  cantidaddespacho: number;
  cantidaddisponible: number;
  almacendespacho: string | null;
  cantidadcompra: number;
  comprar:boolean;

  

}

export interface VeneluxSolicitudWithMaterials {
  solicitudnumero: string;
  empresa: string;
  codigoobra: string;
  descripcionobra: string;
  numerocontrol: string;
  solicitanteuser: string;
  solicitantecodigo: string;
  fechasolicitud: string;
  fechautilizacion: string;
  observacion: string;
  actividad: string;
  direccionentrega: string;
  registradopor: string;
  autorizado: string | number | boolean | null;
  fechaautorizado: string | null;
  autorizadopor: string | null;
  anulado: string | number | boolean | null;
  motivoanulado: string | null;
  fechaanulado: string | null;
  anuladopor: string | null;
  despachar: string | number | boolean | null;
  fechadespachar: string | null;
  despacharpor: string | null;
  comentadespachar: string | null;
  pedido: string | number | boolean | null;
  ped_num: string | null;
  fec_emis_ped: string | null;
  co_us_ped: string | null;
  comprar: string | number | boolean | null;
  fechacomprar: string | null;
  comprarpor: string | null;
  comentacomprar: string | null;
  compra: string | number | boolean | null;
  comp_num: string | null;
  fec_emis_comp: string | null;
  co_us_comp: string | null;
  owneruser: string;
  estatus: number;
  estatusLabel: string;
  horasEnEstatus: number;
  diasEnEstatus: number;
  materiales: VeneluxSolicitudMaterialItem[];
}

export interface VeneluxSolicitudStatusSummary {
  estatus: number;
  label: string;
  total: number;
  promedioHorasEnEstatus: number;
  promedioDiasEnEstatus: number;
}
