import { Injectable } from '@nestjs/common';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

@Injectable()
export class CustomersService {
  constructor(private readonly sql: SQLServerPrismaService) {}

  async GetAllClientes() {
    return this.sql.clientes.findMany();
  }

  async GetZoneClientes(codzone: string){
    return this.sql.clientes.findMany({
        where:{
            co_zon:{
                contains:codzone
            }
        }
    })
  }
  async GetCliente(codcliente:string){
    return this.sql.clientes.findFirst({
        where:
        {
            co_cli:{
                contains:codcliente
            }
        }
    })
  }
}
