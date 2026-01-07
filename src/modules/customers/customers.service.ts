import { Injectable } from '@nestjs/common';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

@Injectable()
export class CustomersService {
  constructor(private readonly sql: SQLServerPrismaService) {}

  async GetAllClientes(role?: string, codven?: string) {
    return this.sql.clientes.findMany({
      select:{

        co_cli:true,
        cli_des:true,
        direc1:true, 
        direc2:true,
        dir_ent2:true,        
        co_zon:true,
        rif:true,
        telefonos:true,
        email:true
         
      }, where:{
        inactivo:false, 
        ...((role === '5' || role === '4') && codven ? { co_ven: codven } : {}),
      }
    });
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
