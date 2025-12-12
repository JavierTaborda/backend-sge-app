
// import "dotenv/config";
// import { defineConfig, env } from "prisma/config";


// export default [
//     defineConfig({
//         schema: 'prisma/mysql/schema.prisma',
//         migrations: {
//             path: 'prisma/mysql/migrations',
//             seed: 'tsx prisma/mysql/seed.ts',
//         },
//         datasource: {
//             url: env('MYSQL_DATABASE_URL'),
//         },
//     }),
//     defineConfig({
//         schema: 'prisma/sqlserver/schema.prisma',
//         migrations: {
//             path: 'prisma/sqlserver/migrations',
//             seed: 'tsx prisma/sqlserver/seed.ts',
//         },
//         datasource: {
//             url: env('SQLSERVER_DATABASE_URL'),
//         },
//     }),
// ]
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