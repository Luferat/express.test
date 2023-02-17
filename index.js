/**
 * index.js
 * Aplicativo principal.
 */

// Carrega o módulo "express.js".
const express = require('express');

// Cria um aplicativo "Express".
const app = express();

// Faz configuração do aplicativo.
const conf = require('dotenv').config().parsed;

// Faz configuração da porta do servidor HTTP.
const port = conf.HTTPPORT || 3000;

// Importa as listas de rotas.
const appRouter = require('./control/routes');

// nicializa o aplicativo "Express".
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Inicia monitoramento das rotas.
app.use(appRouter);
app.use('/user', appRouter);

// Executa o servidor HTTP.
app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});''

/**
 * By Luferat 2023
 * MIT Licensed
 */