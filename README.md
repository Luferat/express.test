# express.test
Aplicativo experimental em Node.js, Express e MySQL.

## Arquivo de Configuração
Antes de seguir as próximas etapas, verifique se preparou o [arquivo de configuração](https://github.com/Luferat/express.test/tree/Atividade.02_Arquivo_de_configura%C3%A7%C3%A3o).

## Passando Parâmetros pelas Rotas

Para que você possa fazer essa atividade é necessário que todas as atividades anteriores tenham sido executadas. Se não tem certeza, retorne à [atividade anterior](https://github.com/Luferat/express.test/tree/Atividade.04_Verbos_HTTP_GET) e reveja todos os conceitos.

## Lidando com Dados Complexos

As tarefas mais complicadas que vamos realizar nas transações HTTP certamente são as que precisam receber dados de fora, no caso "POST" e "PUT". Isso porque, além de garantir que esses dados foram recebidos, temos que garantir que eles são seguros o suficiente para serem, por exemplo, armazenados em um banco de dados.

### Versionando

 - Abra / retorne ao GitHub Desktop;
 - Confirme se o branch da última atividade está ativo → Por exemplo `2023.02.11.Rotas_com_parametros`;
   - *O novo branch será criado a partir do branch anterior, já que estamos "incrementando" o aplicativo com novos recursos.*
 - Clique no menu Branch → New branch...;
 - Nomeie o branch da melhor forma, por exemplo: `2023.02.11.Verbos_POST_PUT`;
 - Clique no botão [Create branch].

### Processando os Dados Recebidos

Na prática, receber dados via HTTP não é complexo, até porque o Express lida com isso muito bem. Precisamos primeiro, determinar como esses dados se apresentaram ao servidor. Como estamos tratando aqui de uma API REST, certamente esses dados chegarão na forma de JSON. O primeiro passo então é extrair o que nos interessa, deste JSON:

 - Abra o arquivo `index.js` no **VSCode**;
 - Localize as rotas "GET" e "DELETE" que inserimos e, logo acima delas, adicione as linhas abaixo:
 
```
// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json(); 
```

A biblioteca "body-parser" que acompanha o "Express.js" que é responsável por extrair os dados do HTTP da forma correta na forma de JSON.

Em outra situação, se precisasse extrair os dados vindos diretamente de um formulário HTML, por exemplo, poderíamos usar:

```
// Extrai os dados do cabeçalho da requisição usando "URL ENCODED".
const bodyParser = require('body-parser').urlencoded();
```

O formato "URL ENCODED", apesar de ser mais comum, pode não ser recomendado porque provavelmente não passou por um tratamento prévio como uma sanitização ou validação. No caso do JSON, o cliente deve estar preparado e consumir alguns recursos de máquina a mais para gerar e enviar os dados neste formato que, por se tratar de "texto plano" é um pouco mais seguro.

### Implementando as Rotas

O que precisamos fazer é adicionar `bodyParser` no "gancho" (hook) das rotas que recebem dados, de forma a que esses dados sejam entregues pela requisição, já previamente formatados:

 - Ainda no **VSCode**, editando `index.js`;
 - Localize os métodos `app.get()` e `app.delete()` já implementados;
 - Logo abaixo deles, adicione os novos métodos:
```
•••
// Rota para as requisições do método "POST".
app.post('/', bodyParser, controller.resJson);

// Rota para as requisições do método "PUT" com parâmetro "id".
app.put('/:id', bodyParser, controller.resJson);
•••
```
Observe que adicionamos `bodyParser` no segundo parâmetro dos métodos, indicando justamente os "hooks" destes métodos.

### Testando

 - Pelo **Postman**, crie uma nova sessão apontando para a URL `http://localhost:3000/`;
 - Chaveie para o método "POST", pois enviaremos dados para o servidor;
 - Configure a requisição para "Body", do tipo "raw"no formato "JSON";
 - Escreva o JSON no campo de dados, por exemplo:
 ```
 {
    "name": "Joca",
    "email": "joca@silva.com",
    "age": "31"
}
```
 - Envie, clicando em [Send];
 
Observe que a resposta agora inclui o atributo "body" com os dados que foram enviados no JSON da requisição.

```
{
    "method": "POST",
    "url": "/",
    "baseUrl": "",
    "query": {},
    "originalURL": "/",
    "params": {},
    "body": {
        "name": "Joca",
        "email": "joca@silva.com",
        "age": "31"
    },
    "headers": {
        "content-type": "application/json",
        "user-agent": "PostmanRuntime/7.30.1",
        "accept": "*/*",
        "postman-token": "494fe34f-5c43-4e55-abad-6c7bcb99be23",
        "host": "localhost:3000",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive",
        "content-length": "74"
    }
}
```

### Atividade de Reforço

1. Realize mais alguns testes de "POST" com o **Postman** e analise os resultados. Como você faria para extrair esses dados de forma a poder, por exemplo, salvá-los em um banco de dados usando "SQL"?
2. Faça testes com o método "PUT". Observe que ele exige que o parâmetro "ID" seja passado na rota. Por que isso acontece?

## Salve a Atividade

 - Volte ao GitHub Desktop;
 - Observe a coluna esquerda, onde aparecem as alterações salvas no Git stage;
 - No final, escreva a mensagem de Git commit no campo menor;
 - Opcionalmente, você pode inserir uma descrição mais detalhada deste commit no campo maior.
 - Clique no botão [Commit to...] logo abaixo da mensagem;
 - No painel principal, clique no botão [Pull origin] para salvar branch atual no GitHub.com.

---
[← Verbos HTTP](https://github.com/Luferat/express.test/tree/Atividade.03_Verbos_HTTP) || **Rotas com Parâmetros** || [Próxima →](https://github.com/Luferat/express.test/tree/)
