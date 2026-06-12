// import "dotenv/config";
// import { defineConfig, env } from "prisma/config";

// export default 
//   defineConfig({
//     schema: 'prisma/sqlserver_2/schema.prisma',
//     migrations: {
//       path: 'prisma/sqlserver_2/migrations',
//     },
//     datasource: {
//       url: env('SQLSERVER2_DATABASE_URL'),
//     },
//   });
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// 1. Centralizamos la configuración de tus 4 bases de datos en un objeto limpio
const dbEnvironments = {
  mysql: {
    schema: 'prisma/mysql/schema.prisma',
    migrationsPath: 'prisma/mysql/migrations',
    url: env('MYSQL_DATABASE_URL'),
  },
  testsql: {
    schema: 'prisma/testsql/schema.test.prisma',
    migrationsPath: 'prisma/testsql/migrations',
    url: env('TEST_MYSQL_DATABASE_URL'),
  },
  sqlserver: {
    schema: 'prisma/sqlserver/schema.prisma',
    migrationsPath: 'prisma/sqlserver/migrations',
    url: env('SQLSERVER_DATABASE_URL'),
  },
  sqlserver_2: {
    schema: 'prisma/sqlserver_2/schema.prisma',
    migrationsPath: 'prisma/sqlserver_2/migrations',
    url: env('SQLSERVER2_DATABASE_URL'),
  },
};

// 2. Evaluamos los argumentos de la terminal para saber cuál estás llamando
const terminalArgs = process.argv.join(' ');
let selectedEnv = dbEnvironments.sqlserver; // Base de datos por defecto si no se especifica ruta

if (terminalArgs.includes('prisma/mysql')) {
  selectedEnv = dbEnvironments.mysql;
} else if (terminalArgs.includes('prisma/testsql')) {
  selectedEnv = dbEnvironments.testsql;
} else if (terminalArgs.includes('prisma/sqlserver_2')) {
  selectedEnv = dbEnvironments.sqlserver_2;
}

// 3. Exportamos un ÚNICO objeto válido que Prisma 7 sí puede parsear
export default defineConfig({
  schema: selectedEnv.schema,
  migrations: {
    path: selectedEnv.migrationsPath,
    // Añadimos el seed condicional solo si es MySQL para mantener tu lógica anterior
    ...(selectedEnv.schema.includes('mysql/schema.prisma') && { seed: 'tsx prisma/mysql/seed.ts' }),
  },
  datasource: {
    url: selectedEnv.url,
  },
});