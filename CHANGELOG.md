# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - YYYY-MM-DD

### Added

-N/A

### Changed

- Add model mtarticulos and relation { codart  String   `@id` @db.VarChar(30) ...} in model prisma for use it:

``` prisma
model metas {
  anio      String @db.VarChar(4)
  mes       String @db.VarChar(2)
  codven    String @db.VarChar(6)
  codart    String @db.VarChar(30)
  asignado  Int    @default(0)
  utilizado Int    @default(0)

  articulo  mtarticulos? @relation(fields: [codart], references: [codart])

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
