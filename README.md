
# express.test
Aplicativo experimental em Node.js, Express e MySQL.

## Preparação do Dev Setup
Ante de tudo, prepare o setup de desenvolvimento, conforme a descrição [deste link](https://docs.google.com/file/d/1Zo42HZvGtEAx-9OjLX5Cr9J5SKl07NvUxLGSTSbWHpc).  

## Criando aplicativo
 - Abra um "Node.js command prompt";
 - Navegue até a pasta onde a pasta do projeto será criada;
   - Use o comando "cd" e a tecla [Tab] para navegar entre as pastas.
 - Crie a pasta do projeto e entre nela;
   - Use o comando `mkdir` para criar a pasta e o comando `cd` para entrar nela:
```
mkdir express.test
cd express.test
```
 - Use o comando `npm init` para criar o projeto - `package.json`;
 - Preencha os dados solicitados com atenção;
 - Instale as dependências iniciais, comandando:
```
npm install express --save
npm install nodemon --save
```
 - Abra o VSCode, comandando `code .`;
 - Crie o arquivo `index.js` com o seguinte conteúdo ([link original](https://expressjs.com/pt-br/starter/hello-world.html)):
```
const express = require('express');
const app = express();
const port = 3000;  

app.get('/', (req, res) => {
    res.send('<h1>Olá Mundo!</h1>');
});

app.listen(port, () => {
    console.log(`Executando servidor em http://localhost:${port}`);
});
```
 - Rode o servidor, comandando `nodemon index.js` pelo "Node.js command prompt";
 - Abra o navegador e acesse `http://localhost:3000/`.

O resultado deve ser a mensagem "Olá Mundo!" exibida no navegador.

O aplicativo inicia um servidor e escuta a porta `3000` por conexões. O aplicativo responde com “Hello World!” à solicitações para a URL raiz (`/`) ou _rota_. Para todos os outros caminhos, ele irá responder com um **404 Não Encontrado**.

### Atividade de Reforço
Volte ao VSCode e, com base em pesquisas, adicione um comentário (`//`) acima de cada linha de código, explicando de forma bem resumida o que ela faz no aplicativo. Veja o exemplo, onde já comentamos a primeira instrução:
```
// Importa a biblioteca "Express.js" e a atribui para a constante "express".
const express = require('express');
const app = express();
const port = 3000;  

app.get('/', (req, res) => {
    res.send('<h1>Olá Mundo!</h1>');
});

app.listen(port, () => {
    console.log(`Executando servidor em http://localhost:${port}`);
});
```
