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
      "headers": req.headers,
      "id": req.params.id
    }

    // Envia dados na forma de texto (text/html).
    //res.send(data);

    // Envia dados na forma de JSON.
    res.json(data);

  }
}

// Extrai os dados do cabeçalho da requisição usando "URL ENCODED".
// const bodyParser = require('body-parser').urlencoded();

// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json();

// Rota para as requisições do método "GET".
app.get('/', controller.resJson);

// Rota para as requisições do método "GET" com parâmetro "id".
app.get('/:id', controller.resJson);

// Rota para as requisições do método "DELETE" com parâmetro "id".
app.delete('/:id', controller.resJson);

// Rota para as requisições do método "POST".
app.post('/', bodyParser, controller.resJson);

// Rota para as requisições do método "PUT" com parâmetro "id".
app.put('/:id', bodyParser, controller.resJson);

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});