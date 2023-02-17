/**
 * control/routes.js
 * Arquivo de rotas do aplicativo.
 */

// Carrega o módulo "express.js".
const express = require('express');

// Cria um roteamento "Express".
const router = express.Router();

// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json();

// Carrega o controller de 'things'.
const thingControl = require('./thingControl');

// Rota raiz emite mensagem de erro.
router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

// Rotas para as requisições de 'things'.
router.get("/thing/", thingControl.getAll);
router.get("/thing/:id", thingControl.getOne);
router.post("/thing/", bodyParser, thingControl.post);
router.put("/thing/:id", bodyParser, thingControl.put);
router.delete("/thing/:id", thingControl.delete);

// Carrega o controller de 'users'.
const userControl = require('./userControl');

// Rotas para as requisições de 'users'.
router.get("/user/", userControl.getAll);
router.get("/user/:id", userControl.getOne);
router.post("/user/", bodyParser, userControl.post);
router.put("/user/:id", bodyParser, userControl.put);
router.delete("/user/:id", userControl.delete);

// Exporta o módulo.
module.exports = router;

/**
 * By Luferat 2023
 * MIT Licensed
 */
