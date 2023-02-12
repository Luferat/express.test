const express = require('express');
const app = express();

// Obtém configurações do aplicativo.
const conf = require('dotenv').config().parsed;

// Configuração da porta do servidor HTTP.
const port = conf.HTTPPORT || 3000;

// Configuração do nome do aplicativo.
const appName = conf.APP_NAME;

app.get('/', (req, res) => {
  res.send(`
    <h1>${appName}</h1>
    <p>Olá Mundo!</p>
  `);
});

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});