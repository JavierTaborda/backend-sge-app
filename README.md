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

3. **Configurar Enviroment Vars**
Copia el archivo .env.example a .env:

```bash
cp .env.example .env
```
Edita .env con tus credenciales de base de datos:

MYSQL_DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DB_NAME"

SQLSERVER_DATABASE_URL="sqlserver://USER:PASSWORD@HOST:PORT;database=DB_NAME;encrypt=true;trustServerCertificate=true"

4. **Generar los clientes de Prisma (si no se generaron automáticamente)**

```bash
npm run prisma:generate
```
Esto generará los clientes de Prisma en prisma-clients/mysql y prisma-clients/sqlserver.



5. **Levantar el proyecto en modo desarrollo**

```bash
npm run start:dev
```

La API estará disponible en http://localhost:3000.

Todos los cambios en src/ se recargan automáticamente.

6. **Levantar el proyecto en producción**

npm run build
npm run start:prod


Compila el proyecto a JavaScript en dist/ y lo ejecuta en modo producción.