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
  owneruser: string;
  materiales: VeneluxSolicitudMaterialItem[];
}
