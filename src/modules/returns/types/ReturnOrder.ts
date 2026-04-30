export type ReturnOrder = {
    fact_num: number;
    fec_emis: Date | null;
    reng_ped: Array<{
        co_art: string | null;
        art: { art_des: string | null };
    }>;
    cliente: {
        co_cli: string;
        cli_des: string | null;
        dir_ent2: string | null;
        telefonos: string | null;
        email: string | null;
        rif?: string | null;
    };
    vendedor: {
        co_ven: string;
        ven_des: string | null;
    };
};
