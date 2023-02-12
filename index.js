// Cria aplicativo Express.
const express = require('express')
const app = express()

// Obtém configurações do aplicativo.
const conf = require('dotenv').config().parsed;

// Configuração da porta do servidor HTTP.
const port = conf.HTTPPORT || 3000;

// Ação dos métodos.
const controller = {

    resJson: async (req, res) => {
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

        console.log(data);

        // Envia dados na forma de texto (text/html).
        //res.send(data);

        // Envia dados na forma de JSON.
        res.json(data);

    }

}

// Roda o servidor HTTP(S).
app.listen(port, () => {
    console.log(`Executando servidor em http://localhost:${port}`);
});

// const bodyParser = require('body-parser').urlencoded();
const bodyParser = require('body-parser').json();

// Rotas
app.get('/', controller.resJson);
app.get('/:id', controller.resJson);
app.post('/', bodyParser, controller.resJson);
app.put('/:id', bodyParser, controller.resJson);
app.delete('/:id', controller.resJson);