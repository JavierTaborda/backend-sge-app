# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - YYYY-MM-DD

### Added

-N/A

### Changed

- Ad @id in clvendedores of prisma client, and relation with metas

``` prisma
model clvendedores  {
  codven    String  @id @db.VarChar(6)
  vendes    String  @db.VarChar(60)
  cedula    String? @db.VarChar(15)
  telefono1 String? @db.VarChar(15)
  telefono2 String? @db.VarChar(15)
  codzon    String? @db.VarChar(6)
  vende     Boolean @default(true)
  cobra     Boolean @default(true)
  activo    Boolean @default(true)
    //manual input 
    metas     metas[]
}
```

- Add model mtarticulos and vendedores and relation { codart  String   `@id` @db.VarChar(30) ...} in model prisma for use it:

``` prisma
model metas {
  anio      String @db.VarChar(4)
  mes       String @db.VarChar(2)
  codven    String @db.VarChar(6)
  codart    String @db.VarChar(30)
  asignado  Int    @default(0)
  utilizado Int    @default(0)

  articulo  mtarticulos? @relation(fields: [codart], references: [codart])
  vendedores clvendedores? @relation(fields: [codven], references: [codven])
  
  @@id([anio, mes, codven, codart])
}
```

``` prisma
model mtarticulos {
  codart String @id @db.VarChar(30)
  // ...others 

  metas  metas[] // invert relation
}
```

-Relación entre mtarticulos y clcategoria:

```prisma
model mtarticulos {
  codart     String       @id @db.VarChar(30)
  codcat     String       @db.VarChar(6)
  categoria  clcategoria? @relation(fields: [codcat], references: [codcat])
  // ...others fields
}
```

```prisma
model clcategoria {
  codcat     String        @id @db.VarChar(6)
  catdes     String        @db.VarChar(60)
  articulos  mtarticulos[] //  invert relation
}
```

### Fixed

-N/A

### Removed

-N/A

## [1.0.0] - 2025-10-10

### Added

- Prima clients on MSSQL & MySQL
- orders, zones, customers, vendors module
- ServeStaticModule for images in `api/images`
- Supabase with secret Keys  
- .env Databases connet: MYSQL_DATABASE_URL,SQLSERVER_DATABASE_URL,
- .env for supabase project: SUPABASE_PROJECT,
- .env for enviroment: NODE_ENV,PORT
- .env for images rouytes:  IMAGES_ROUTE

### Changed

-N/A

### Fixed

-N/A

### Removed

-N/A
