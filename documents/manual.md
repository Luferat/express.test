
# Express.Test

  

Aplicativo experimental em Node.js, Express e MySQL.

## Pré-requisitos

 - [Node.js](https://nodejs.org/) instalado e operacional;
 - [Git](https://git-scm.com/) instalado e funcionando;
 - [MySQL](https://www.mysql.com/products/community/) instalado e operacional;
 - [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) para gerir o banco de dados;

> Opcionalmente, você pode usar o [XAMPP](https://www.apachefriends.org/pt_br/index.html) ou outro pacote AMP, que já contempla o MySQL e o PHPMyAdmin, que substitui com maestria o **MySQL Workbench** neste caso.

- [Postman](https://www.postman.com/) para fazer os experimentos necessários;
- Algum conhecimento de front-end, JavaScript, SQL, API REST e JSON. Quanto mais, melhor, mas, se for demais, esse repositório é inútil para você. Procure algo mais avançado. 😉

## Obtendo e instalando.

1. Acesse o repositório do aplicativo → [https://github.com/Luferat/express.test]

2. De acordo com sua necessidade e "intimidade" com o GitHub.com, você pode:

      a. **Fazer "Fork" do repositório para seu GitHub.com** 
Ideal para quem quiser desenvolver sua própria API usando este modelo como base ou ainda, colaborar com a melhoria deste modelo. Para isso, basta clicar no botão [Fork] no alto, à direita da janela.

    b. **Baixar uma versão "ZIP"**
Se você apenas quer testar o aplicativo de forma mais despretensiosa, pretende usá-lo como está ou usá-lo para consulta para fazer seu próprio aplicativo. Para isso, clique no botão `[<> Code]` e, em seguida, em "Download ZIP".

    c. **Clonar o repositório**
Se pretende clonar o repositório, sugerimos que faça "Fork" dele primeiro, e clone diretamente da sua conta.  Para clonar, clique em `[<> Code]`  e copie o endereço do repositório. Se preferir, com o [Git](https://git-scm.com/) já instalado no sistema, crie uma pasta, e comande pelo `Prompt de Comandos` ou `Console de Comandos` ou ainda `Terminal de comandos`, conforme seu sistema:

    ```git clone https://github.com/Luferat/express.test.git```

    Uma excelente alternativa e instalar o [GitHub Desktop](https://desktop.github.com/)  no sistema; clicar em `[<> Code]` e depois em "Open with GitHub Desktop".

3. Uma vez com os códigos baixados, abra um `Terminal de comandos`, acesse a pasta onde clonou os códigos fonte e baixe as dependências comandando `npm install`.

## Preparando o banco de dados

Na pasta `model` você encontra um arquivo `things.sql`. Usando o *MySQL Workbench* ou o *PHPMyAdmin*, rode o código para criar um novo banco de dados chamado "things" que será a base do modelo da API.

## Rodando

Lá no `Terminal de comandos`, acesse a pasta onde estão os códigos do aplicativo e comande `npm run start` ou `node index.js` ou ainda `nodemon index.js`, sendo este último o recomendado para que vai desenvolver algo sobre o aplicativo.

Se não ocorreram erros, a API já está "no ar".

## Consumindo

> **Importante!**
>
>Todos os dados enviados para e recebidos da API são JSON.

Use o **Postman** para testar os recursos da API.

 - **getAll → Método GET** 
Para listar todos os registros das tabelas do banco de dados "things":
    - `http://localhost:3000/thing/` → Retorna todos os registros da tabela "things" que atendem aos requisitos.
    - `http://localhost:3000/user/` → Retorna todos os registros da tabela "users" que atendem aos requisitos.

 - **getOne → Método GET**
Para listar um registro único:
   - `http://localhost:3000/thing/3` → Retorna apenas o registro com `tid = 3` da tabela "things", se ele atender aos requisitos. 

   - `http://localhost:3000/user/3` → Retorna apenas o registro com `uid = 3` da tabela "users", se ele atender aos requisitos.

Em ambos os casos, se o registro não existe ou não atende aos requisitos, retorna um JSON vazio, conforme abaixo.
 ```
{
    data: []
}
```

 - **post → Método POST**
Para cadastrar um novo registro, configure o "Postman" para o método `POST` com os dados no `body` no formato `raw` e apresentação `JSON`.

Para inserir um novo registro em "things", use a URL abaixo e prepare no `raw` do "Postman" um JSON, conforme o exemplo:
```
http://loalhost:3000/thing/
```
```
{
    "user":  "1",
    "name":  "Artefato milenar secreto",
    "photo":  "https://picsum.photos/198",
    "description":  "Varius dolor eget, dignissim ex. Morbi nec tortor aliquet, feugiat neque eu, sagittis est.",
    "location":  "Dimensão alternativa",
    "options":  "{\"estado\": \"infinito\", \"cor\": \"de burro quando foge\", \"marca\": \"Unmarked\"}"
}
```

> Observe que a inserção dos  campos `id`, `date` e `status` é opcional. Se não inseridos, serão usados valores "default".

Para inserir um novo registro em "users", use a URL abaixo e prepare no `raw` do "Postman" um JSON, conforme o exemplo:
```
http://loalhost:3000/user/
```
```
{
	"name":  "Marineuza Siriliano",
	"email":  "marineuza@gamil.com",
	"password":  "Senha_123",
	"avatar":  "https://randomuser.me/api/portraits/women/12.jpg",
	"birth":  "2005-01-14T02:00:00.000Z"
}
```

> Observe que, da mesma forma, a inserção dos  campos `id`, `date` e `status` é opcional. Se não inseridos, serão usados valores "default". Neste caso também, a senha será inserida criptografada pela função `SHA1()` do MySQL.

A resposta será um JSON com os dados retornados do banco de dados, confirmando a operação.
```
{
    "data":  {
        "fieldCount":  0,
        "affectedRows":  1,
        "insertId":  0,
        "info":  "Rows matched: 1 Changed: 1 Warnings: 0",
        "serverStatus":  2,
        "warningStatus":  0,
        "changedRows":  1
    }
}
```


 - **put → Método PUT**
Para alterar (UPDATE) um registro existente, usamos as mesmas configurações de ` POST`, porém, informando o "ID" do registro a ser editado, na URL. 

Para a tabela "things", temos a seguinte URL e o JSON de exemplo:
```
http://loalhost:3000/thing/3
```
Onde "3" é o ID do registro a ser alterado.
```
{
    "user":  "1",
    "name":  "Artefato milenar falso",
    "photo":  "https://picsum.photos/197",
    "description":  "Varius dolor eget, dignissim ex. Morbi nec tortor.",
    "location":  "Dimensão alternativa",
    "options":  "{\"estado\": \"dimensional\", \"cor\": \"de burro quando foge\", \"marca\": \"Unmarked\"}"
}
```

Da mesma forma, para a tabela "users", temos a seguinte URL e o JSON de exemplo:
```
http://loalhost:3000/user/3
```
Onde "3" é o ID do registro a ser alterado, 
```
{
	"name":  "Marineuza Siriliano",
	"email":  "marineuza@gamil.com",
	"password":  "Senha_123",
	"avatar":  "https://randomuser.me/api/portraits/women/12.jpg",
	"birth":  "2005-01-14T02:00:00.000Z"
}
```
A resposta será um JSON com os dados retornados do banco de dados, confirmando a operação, similar à resposta obtida de um `POST`.

 - **delete → Método DELETE**
Para excluir um registro, alteramos o valor do campo "status" deste para "del". Assim, não apagamos realmente o registro, apenas o marcamos como apagado para o aplicativo.

Para a tabela "things", temos a URL abaixo:
```
http://loalhost:3000/thing/3
```
Como antes, a resposta será um JSON com os dados retornados do banco de dados, confirmando a operação, similar à resposta obtida de um `POST` ou `PUT`.

> **Dica!**
Uma das primeiras sugestões de implementação, é personalizar e padronizar as confirmações do "POST", "PUT" e "DELETE", além de personalizar também as mensagens de erro que podem ser enviadas como JSON para o cliente.
