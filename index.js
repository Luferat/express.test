const express = require('express');
const app = express();

// Obtém configurações do aplicativo.
const conf = require('dotenv').config().parsed;


const mysql = require('mysql2');
const conn = mysql.createPool({
  host: conf.HOSTNAME,
  user: conf.USERNAME,
  password: conf.PASSWORD,
  database: conf.DATABASE,
}).promise();


// Configuração da porta do servidor HTTP.
const port = conf.HTTPPORT || 3000;

// Configuração do nome do aplicativo.
const appName = conf.APP_NAME;

// Ação a ser executada quando ocorre uma requisição HTTP.
const thing = {

  getAll: async (req, res) => {

    try {

      const [rows] = await conn.query("SELECT * FROM things");
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: error, message: error });

    }

  },

  getOne: async (req, res) => {

    try {

      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM things WHERE tid = ?", [id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: error, message: error });

    }

  },

  delete: async (req, res) => {

    try {

      const { id } = req.params
      const sql = "UPDATE things SET tstatus = 'del' WHERE tid = ?"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: error, message: error });

    }

  },

  post: async (req, res) => {

    try {

      const { tuser, tname, tphoto, tdescription, tlocation, toptions } = req.body;
      const sql = "INSERT INTO things (tuser, tname, tphoto, tdescription, tlocation, toptions) VALUES (?, ?, ?, ?, ?, ?)";
      const [rows] = await conn.query(sql, [tuser, tname, tphoto, tdescription, tlocation, toptions]);
      res.json({ data: rows });

    } catch (error) {
      res.json({ status: error, message: error });
    }

  },

  put: async (req, res) => {

    try {

      const { tuser, tname, tphoto, tdescription, tlocation, toptions } = req.body;
      const { id } = req.params;
      const sql = "UPDATE posts SET tuser = ?, tname = ?, tphoto = ?, tdescription = ?, tlocation = ?, toptions = ? WHERE tid = ?"
      const [rows] = await conn.query(sql, [tuser, tname, tphoto, tdescription, tlocation, toptions]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: error, message: error });

    }

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
