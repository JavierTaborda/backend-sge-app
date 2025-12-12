# Changelog

All notable changes to this project will be documented in this file.

## [1.0.4] - 2025-MM-DD #UNRELEASED

### Added

### Changed

- Update prisma 7.1
- use prisma.mysql.config.ts y prisma.sql.config.ts to renplace url in schema prisma
- Update Nest JS version to 11
- Use `@prisma/adapter-mariadb` and `@prisma/adapter-mssql` to connect the database
- Change ouput from  `"../../prisma-clients/"` to `"../../src/prisma-clients/"`
- Add env to use connection in mysql.service.ts and sqlserver.service.ts

### Fixed

### Removed

## [1.0.3] - 2025-11-25

### Added

-Add return reports module

### Changed

- Add relation in  reng_ped and art:

``` prisma
  art art? @relation(fields: [co_art], references: [co_art])
```

``` prisma.  
 reng_ped reng_ped[]
```

-Add relation in  pedidos and clientes:

``` prisma
cliente  clientes? @relation(fields: [co_cli], references: [co_cli])
```

``` prisma
pedidos pedidos[] 

```

-Add relation in  pedidos and vendedor:

``` prisma
   vendedor  vendedor? @relation(fields: [co_ven], references: [co_ven])
```

``` prisma
pedidos pedidos[] 

```

### Fixed

### Removed

## [1.0.2] - 2025-10-27

### Added

- `getcategorys` endpoint in products module

### Changed

- Add in mtprofitart

``` prisma

categoria  clcategoria? @relation(fields: [codcat], references: [codcat])

```

- Add   mtprofitart mtprofitart[] in categorias

- Add code of category en goals module

### Fixed

-N/A

### Removed

-N/A

## [1.0.1](https://github.com/JavierTaborda/backend-sge-app/releases/tag/v1.0.1) - 2025-10-22

### Added

- Module goals: goals.dto, Sellers.dto, getgoals by role of the user.
Note:  The goals service get the data from sql server  and update in my sql to get the data.

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

- Add model mtprofitart and vendedores and relation { codart  String   `@id` @db.VarChar(30) ...} in model prisma for use it:

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
model mtprofitart {
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

-Add  conntroller and service `PATCH /orders/comment/:factNum` in orders for update the comment to `**` or `` by the sellers.

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
