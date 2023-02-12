# express.test
Aplicativo experimental em Node.js, Express e MySQL.

## Preparação do Dev Setup
Antes de tudo, prepare o setup de desenvolvimento, conforme a descrição [deste link](https://docs.google.com/file/d/1Zo42HZvGtEAx-9OjLX5Cr9J5SKl07NvUxLGSTSbWHpc).  

## Criando aplicativo
 - Abra um "**Node.js command prompt**";
 - Comande `echo %homedrive%%homepath%`, selecione e copie o resultado;
    - *Este será o caminho da sua pasta de usuário do sistema.*
 - Abra o **GitHub Desktop** e logue-se, se necessário;
    - Menu `File` → `Options` → `Acounts` → [Sign in]
    - *O login é feito pelo navegador padrão, com sua conta **GitHub.com**.*
 - No menu `File`, clique em `New repository...`;
 - Na popup "Create a new repository", preencha os dados:
    - Name → `express.test`
    - Description → `Aplicativo experimental usando Node.js, Express.js e MySQL.`
    - Local path → 
       - Preencha o campo acima com o caminho absoluto onde o projeto será criado. Se necessário, troque o endereço da pasta.


 - Abra um "**Node.js command prompt**";
 - Navegue até a pasta onde a pasta do projeto será criada;
   - Use o comando `cd` e a tecla `[Tab]` para navegar entre as pastas.
 - Crie a pasta do projeto e entre nela;
   - Use o comando `mkdir` para criar a pasta e o comando `cd` para entrar nela:
```
mkdir express.test
cd express.test
```
 - Use o comando `npm init` para criar o projeto
 - Preencha os dados solicitados com atenção;
   - Será criado um arquivo `package.json` com todos os dados do projeto que você inseriu;
 - Instale as dependências iniciais, comandando:
```
npm install express --save
npm install nodemon --save
```

> **Atividades complementares de pesquisa:**
>  1. O que são essas dependências? Para que serve cada uma?
>  2. Onde essas dependências foram instaladas?
>  2. Por que usamos o parâmetro `--save` na instalação delas?

 - Abra o VSCode, comandando `code .`;
   - Caso o comando não funcione, revise a [instalação do VSCode](https://docs.google.com/file/d/1Zo42HZvGtEAx-9OjLX5Cr9J5SKl07NvUxLGSTSbWHpc).
 - Crie o arquivo `index.js` com o seguinte conteúdo ([referências](https://expressjs.com/pt-br/starter/hello-world.html)):
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
 - Rode o servidor, comandando `nodemon index.js` pelo "**Node.js command prompt**";
 - Abra o navegador e acesse o endereço `http://localhost:3000/`.

O resultado deve ser a mensagem "**Olá Mundo!**" exibida no navegador.

> O aplicativo inicia um servidor e escuta a porta `3000` por conexões. Quando ocorrer uma (request), ele responde com “Olá Mundo!” à solicitações para a URL raiz (`/`) ou _rota_. Para todos os outros caminhos, ele irá responder com um **404 Não Encontrado**.

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
---
[← Preparação do Dev Setup](https://github.com/Luferat/express.test) || **Criando o Aplicativo** || [Arquivo de Configuração →](https://github.com/Luferat/express.test/tree/Atividade.02_Arquivo_de_configura%C3%A7%C3%A3o)
