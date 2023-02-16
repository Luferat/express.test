const express = require('express');
const app = express();

// Obtém configurações do aplicativo.
const conf = require('dotenv').config().parsed;

// Configuração da porta do servidor HTTP.
const port = conf.HTTPPORT || 3000;

// Configuração do nome do aplicativo.
const appName = conf.APP_NAME;

// Ação a ser executada quando ocorre uma requisição HTTP.
const thing = {

  getAll: async (req, res) => {
    data = {
      method: req.method,
    };
    res.json(data);
  },

  getOne: async (req, res) => {
    data = {
      method: req.method,
      id: req.params.id
    };
    res.json(data);
  },

  delete: async (req, res) => {
    data = {
      method: req.method,
      id: req.params.id
    };
    res.json(data);
  },

  post: async (req, res) => {
    data = {
      method: req.method,
      body: req.body
    };
    res.json(data);
  },

  put: async (req, res) => {
    data = {
      method: req.method,
      id: req.params.id,
      body: req.body
    };
    res.json(data);
  }

};

const user = {

  getAll: async (req, res) => {
    data = {
      method: req.method,
    };
    res.json(data);
  },

  getOne: async (req, res) => {
    data = {
      method: req.method,
      id: req.params.id
    };
    res.json(data);
  },

  delete: async (req, res) => {
    data = {
      method: req.method,
      id: req.params.id
    };
    res.json(data);
  },

  post: async (req, res) => {
    data = {
      method: req.method,
      body: req.body
    };
    res.json(data);
  },

  put: async (req, res) => {
    data = {
      method: req.method,
      id: req.params.id,
      body: req.body
    };
    res.json(data);
  }

};

// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json();

// Rotas para as requisições de 'things'.
app.get('/', thing.getAll);
app.get('/:id', thing.getOne);
app.delete('/:id', thing.delete);
app.post('/', bodyParser, thing.post);
app.put('/:id', bodyParser, thing.put);

// Rotas para as requisições de 'users'.
app.get('/user/', user.getAll);
app.get('/user/:id', user.getOne);
app.delete('/user/:id', user.delete);
app.post('/user/', bodyParser, user.post);
app.put('/user/:id', bodyParser, user.put);

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});