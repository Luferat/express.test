
# express.test
Aplicativo experimental em Node.js, Express e MySQL.

## Criando aplicativo
Antes de seguir em frente, revise as etapas de [criação do aplicativo](https://github.com/Luferat/express.test/tree/Atividade.01_Criando_o_Aplicativo).

## Arquivo de Configuração
Para facilitar a configuração do aplicativo, vamos usar a biblioteca [dotenv](https://github.com/motdotla/dotenv). Com base nos procedimentos da documentação oficial:
 - Abra / retorne ao **Node.js command prompt** do projeto;
 - Instale a dependência, comandado:

```npm install dotenv --save```

 - Abra / retorne ao **VSCode** do projeto;
 - Crie um novo arquivo `.env`, na raiz do projeto e adicione o seguinte conteúdo:
```
HTTPPORT = 3000
APP_NAME = Express.Test
```
 - Edite `index.js` para o seguinte conteúdo:
```
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
``` 

> **IMPORTANTE!**
>
> Por padrão, arquivos `.env*` não são enviados para repositórios Origin do Git, já que eles podem conter informações sensíveis como login e senhas de banco de dados, de APIs pagas e de provedores de serviço.
> *Lembre-se de manter um backup seguro destes arquivos.*
---
[← Criando o Aplicativo](https://github.com/Luferat/express.test/blob/Atividade.01_Criando_o_Aplicativo) || **Arquivo de Configuração** || [Verbos HTTP →](https://github.com/Luferat/express.test/blob/Atividade.03_Verbos_HTTP)
