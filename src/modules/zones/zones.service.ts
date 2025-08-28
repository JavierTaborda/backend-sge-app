import { Injectable } from '@nestjs/common';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

@Injectable()
export class ZonesService {

    constructor(private readonly sql:SQLServerPrismaService){}

    async GetZones(){
        return this.sql.zona.findMany({});
    }

}
