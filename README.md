<p align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
</p>

---

## Descripción

Backend NestJS con integración a MySQL y SQL Server usando Prisma.  
Modulos hechos para funcionalidades por tablas o funcionalidades.

---

## Pre-requisitos

- Node.js >= 22
- npm o pnpm
- MySQL y/o SQL Server corriendo
- Git

---

## Inicialización del proyecto

1. **Clonar el repositorio**

```bash
git clone https://github.com/JavierTaborda/backend-sge-app.git
cd backend-sge-app
```

2. **Intalar Dependencias**

```bash
npm install
```

⚠️ Nota: Durante la instalación, se ejecuta automáticamente npm run prisma:generate para generar los clientes Prisma.

3. **Configurar Enviroment Vars and Prisma**
   Copia el archivo .env.example a .env:

```bash
cp .env.example .env
```

Edita .env con tus credenciales de base de datos:

```bash
# SQL Server

SQLSERVER_USER="user"
SQLSERVER_PASSWORD="password"
SQLSERVER_DATABASE="dbname"
SQLSERVER_HOST="host"
SQLSERVER_PORT="port"
SQLSERVER_DATABASE_URL="sqlserver://host:port;database=dbname;user=user;password=password;encrypt=true;trustServerCertificate=true"

# MySQL

MYSQL_USER="root"
MYSQL_PASSWORD=""
MYSQL_DATABASE="dbname"
MYSQL_HOST="localhost"
MYSQL_PORT=port
MYSQL_DATABASE_URL="mysql://root:@localhost:port/dbname"

# OTHERS
SUPABASE_PROJECT=your-supabase-url-here
NODE_ENV=development - production
PORT=3000 - XXX
IMAGES_ROUTE=C:\\Your\\Route\\Here\\Images
```

Estructura de Prisma:
Crea dos carpetas de schema para mantenerlos separados:
prisma/
├── mysql/
│ └── schema.prisma
└── sqlserver/
└── schema.prisma

Schema.prisma (MySQL)
prisma/mysql/schema.prisma
generator client {
provider = "prisma-client-js"
output = "../../src/prisma-clients/mysql”
moduleFormat = "cjs"

}

datasource db {
provider = "mysql"
}

Schema.prisma (SQL Server)

prisma/sqlserver/schema.prisma
generator client {
provider = "prisma-client-js"
output = "../../src/prisma-clients/sqlserver
moduleFormat = "cjs"

}

datasource db {
provider = "sqlserver"
}
prisma.sql.config.ts y prisma.mysql.config.ts

```bash
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "prisma/mysql/schema.prisma",
    migrations: {
        path: "prisma/mysql/migrations",
        seed: "tsx prisma/mysql/seed.ts",
    },
    datasource: {
        url: env("MYSQL_DATABASE_URL"),
    },
});

import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
    schema: 'prisma/sqlserver/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
    },
    datasource: {
        url: env('SQLSERVER_DATABASE_URL'),
    },
})
```

Generar tablas :

```bash
npx prisma db pull --schema=prisma/mysql/schema.prisma
npx prisma db pull --schema=prisma/sqlserver/schema.prisma
```

4. **Generar los clientes de Prisma (si no se generaron automáticamente)**

```bash
npm run prisma:generate

npx prisma generate  --config=prisma.mysql.config.ts
npx prisma generate  --config=prisma.sql.config.ts
```

Esto generará los clientes de Prisma en prisma-clients/mysql y prisma-clients/sqlserver.

5. **Levantar el proyecto en modo desarrollo**

```bash
npm run start:dev
```

La API estará disponible en <http://localhost:3000>.

La documentacion Swagger estara disponible en <http://localhost:3000/api/docs>.

Todos los cambios en src/ se recargan automáticamente.

6. **Levantar el proyecto en producción**

```bash
npm run build
npm run start:prod
```

Compila el proyecto a JavaScript en dist/ y lo ejecuta en modo producción.

## Consulta de despachos

| Consulta        | Endpoint                                          | Respuesta                                              |
| --------------- | ------------------------------------------------- | ------------------------------------------------------ |
| Listado general | `GET /api/dispatch/orders`                        | Arreglo de hasta 50 cabeceras, sin artículos anidados. |
| Consultar uno   | `GET /api/dispatch/orders/:prednum/:pednum`       | Una cabecera, o 404 si no existe o está anulado.       |
| Contenido       | `GET /api/dispatch/orders/:prednum/:pednum/items` | Arreglo completo de unidades, sin límite de 50.        |

El orden de los parámetros de la consulta individual es **predespacho primero y
pedido después**. Ambos son obligatorios, enteros positivos hasta 2147483647; los
valores inválidos producen un error 400.

```http
GET /api/dispatch/orders/6242/19665
GET /api/dispatch/orders/6242/19665/items
```

El guard de autenticación del controlador está actualmente comentado. Si se
habilita `JwtAuthGuard`, las tres rutas requieren `Authorization: Bearer <token>`.

`GET /api/dispatch/orders` devuelve un arreglo de hasta 50 pedidos para el módulo de despacho, incluyendo abiertos y
cerrados, pero excluyendo siempre `cbpredes.anulado = 1`. Sin coincidencias devuelve
`[]`; los errores de base de datos se propagan como errores HTTP.

La ruta general no recibe filtros por pedido ni predespacho. Los parámetros de
query no se usan: enviar `?prednum=6242&pednum=19665` no restringe el listado.
Para consultar uno específico se debe usar exclusivamente la ruta individual.

```http
GET /api/dispatch/orders
Authorization: Bearer <token>
```

La consulta general devuelve un máximo de 50 cabeceras no anuladas, sin restricción
de fecha ni paginación. Se seleccionan por predespacho descendente y pedido
ascendente. El contenido se consulta por separado, con los ítems ordenados de
forma ascendente. Las consultas individuales no están limitadas a los
predespachos incluidos en este listado. Una cabecera existente sin unidades
devuelve `[]` en la ruta de contenido; si no existe o está anulada, devuelve 404.

### Fuentes y estructura

- `cbpredes`: `prednum`, `pednum`, `fecdesp`, `fecfinal`, `cantdesp`, `owneruser`
  y los códigos `co_cli`, `co_zon`, `co_ven`. `owneruser` es una cadena.
- `conformado`: `"Finalizado"` cuando `cerrado = 1`; `"En despacho"` en otro caso.
- `fecdesp` y `fecfinalStr`: formato `YYYY-MM-DD HH:mm:ss`.
- `fecfinal`: ISO 8601 UTC. `duracion`: diferencia entre `fecdesp` y `fecfinal`
  en `HH:mm:ss`, acumulando las horas incluso por encima de 24. Si no existe
  `fecfinal`, `fecfinal`, `fecfinalStr` y `duracion` son `null`.
- `mtclientes.clides`: `Cliente`.
- `clzonas.zondes`: `Zona`. No se usa la dirección del cliente como zona.
- `clvendedores.vendes`: `Vendedor`.
- `mvpredes`: unidades base. El nombre real en el esquema es `mvpredes`, no
  `mvprdes`; se consulta con SQL parametrizado porque Prisma la tiene con
  `@@ignore`.
- `dtpredes`: complementa las unidades usando la clave
  `(prednum, pednum, itemnum)`. Su `serial1` no vacío, `recouser` y `horacapture`
  tienen prioridad; las unidades que solo existen en esta tabla también se
  incluyen, sin duplicar las presentes en `mvpredes`.
- `mtarticulos.artdes`: `artdes`. `Articulo` concatena `codart + " - " + artdes`;
  si falta la descripción, contiene solo `codart`.
- `refbarra`, `codbarra` y `serial1` se devuelven por separado, sin sustituirse por
  el código de barras del maestro. Los códigos vacíos de `mvpredes` se
  complementan con los de `dtpredes`. Los valores vacíos se normalizan a `null`.
- `horacapture`: hora de captura en `HH:mm:ss`, o `null`.

Los nombres y las mayúsculas del contrato son exactos. Ejemplo de cabecera:

```json
{
  "prednum": 6242,
  "pednum": 19665,
  "conformado": "En despacho",
  "fecdesp": "2026-10-23 09:32:56",
  "fecfinalStr": null,
  "fecfinal": null,
  "duracion": null,
  "co_cli": "00734",
  "Cliente": "CLIENTE EJEMPLO",
  "co_zon": "0002",
  "Zona": "TACHIRA",
  "co_ven": "00004",
  "Vendedor": "VENDEDOR EJEMPLO",
  "cantdesp": 9,
  "owneruser": "43",
  "supervisor": null
}
```

Ejemplo de una unidad en el arreglo de contenido:

```json
{
  "prednum": 6242,
  "itemnum": 1,
  "pednum": 19665,
  "rennum": 1,
  "codalma": "0001",
  "codart": "AVFR-12W",
  "artdes": "AIRE DE VENTANA FRIGILUX",
  "Articulo": "AVFR-12W - AIRE DE VENTANA FRIGILUX",
  "refbarra": "7590020007163",
  "compuesto": 0,
  "manjser": true,
  "codbarra": null,
  "serial1": null,
  "recouser": "0",
  "supervisor": null,
  "horacapture": null,
  "changed": false,
  "selected": false,
  "objectstate": "None",
  "objecticon": "sap-icon://None",
  "lectura": null,
  "objectstate2": "Warning"
}
```

No se devuelven los alias anteriores `id`, `customer`, `scheduledAt`, `items`,
`sku`, `barcode`, `quantity`, `requiresSerial` ni `expectedSerials`. No se agrupan
las unidades por SKU.

Los campos de interfaz se inicializan como en el adjunto del módulo:
`changed = false`, `selected = false`, `objectstate = "None"`,
`objecticon = "sap-icon://None"` y `objectstate2 = "Warning"`.
`lectura` es `"Sin serial"` cuando `manjser = false`, o `null` en otro caso.
No se infieren estos estados a partir de un serial ya capturado.

`supervisor` se obtiene de `sge.users.userUsername`, relacionando `owneruser` en
la cabecera y `recouser` en el contenido con `sge.users.userId`. Si no existe un
usuario relacionado, se representa como `null`; no se fija `"ogarcia"`. Los datos
maestros faltantes se representan con `null`, sin valores inventados. El contrato
también está disponible en Swagger: `/api/docs` (fuera de producción).
