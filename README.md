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
  }

  datasource db {
    provider = "mysql"
  }

Schema.prisma (SQL Server)

prisma/sqlserver/schema.prisma
  generator client {
    provider = "prisma-client-js"
    output = "../../src/prisma-clients/sqlserver
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

Todos los cambios en src/ se recargan automáticamente.

6. **Levantar el proyecto en producción**

```bash
npm run build
npm run start:prod
```

Compila el proyecto a JavaScript en dist/ y lo ejecuta en modo producción.
