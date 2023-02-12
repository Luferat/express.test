const express = require('express');
const app = express();

// Obtém configurações do aplicativo.
const conf = require('dotenv').config().parsed;

// Configuração da porta do servidor HTTP.
const port = conf.HTTPPORT || 3000;

// Configuração do nome do aplicativo.
const appName = conf.APP_NAME;

// Ação a ser executada quando ocorre uma requisição HTTP.
const controller = {

  resJson: async (req, res) => {

    // Lista com alguns atributos úteis da requisição HTTP:
    data = {
      "method": req.method,
      "url": req.url,
      "baseUrl": req.baseUrl,
      "query": req.query,
      "originalURL": req.originalUrl,
      "params": req.params,
      "body": req.body,
      "headers": req.headers
    }

    // Envia dados na forma de texto (text/html).
    //res.send(data);

    // Envia dados na forma de JSON.
    res.json(data);

  }
}

// Rota para as requisições do método "GET".
app.get('/', controller.resJson);

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});