# express.test
Aplicativo experimental em Node.js, Express e MySQL.

## Arquivo de Configuração
Antes de seguir as próximas etapas, verifique se preparou o [arquivo de configuração](https://github.com/Luferat/express.test/tree/Atividade.02_Arquivo_de_configura%C3%A7%C3%A3o).

## Verbos HTTP

Se ainda não configurou o aplicativo para usar as rotas dos métodos HTTP, [volte e siga os passos](https://github.com/Luferat/express.test/tree/Atividade.03_Verbos_HTTP).

## Passando Parâmetros pelas Rotas

Quando precisamos obter um registro único, seja para exibí-lo, editá-lo o apagá-lo, a melhor forma e mais simples de identificá-lo é passar seu "ID" pela própria rota da requisição.

### Versionando

 - Abra / retorne ao GitHub Desktop;
 - Confirme se o branch da última atividade está ativo → Por exemplo `2023.02.11.Verbos_HTTP`;
   - *O novo branch será criado à partir do branch anterior, já que estamos "incrementando" o aplicativo com novos recursos.*
 - Clique no menu Branch → New branch...;
 - Nomeie o branch da melhor forma, por exemplo: `2023.02.11.Rotas_com_parametros`;
 - Clique no botão [Create branch].

### Criando as Rotas

Vamos criar duas rotas que precisam de, pelo menos, um parâmetro, as rotas dos métodos "GET" e "DELETE". Esse parâmetro será o ID do registro a ser operado pelo aplicativo.

 - Abra / retorne ao o VSCode do projeto;
 - Abra o arquivo `index.js`;
 - Localize o ponto onde inserimos o método `app.get()`;
 - Adicione logo abaixo a nova rota para "GET", só que, desta vez, esperando o parâmetro ID;
 - Adicone também a rota para "DELETE";
 - Teremos algo como:

```
•••

// Rota para as requisições do método "GET".
app.get('/', controller.resJson);

// Rota para as requisições do método "GET" com parâmetro "id".
app.get('/:id', controller.resJson);

// Rota para as requisições do método "DELETE" com parâmetro "id".
app.delete('/:id', controller.resJson);

•••
```
Use o **Postman** para testar uma requisição "GET" para o endereço `http://localhost:3000/10`, por exemplo, e observe os resultados devolvidos pelo servidor:
```
{
    "method": "GET",
    "url": "/10",
    "baseUrl": "",
    "query": {},
    "originalURL": "/10",
    "params": {
        "id": "10"
    },
    "headers": {
        "content-type": "application/json",
        "user-agent": "PostmanRuntime/7.30.1",
        "accept": "*/*",
        "postman-token": "66d08d0c-19dc-45da-b8e1-ee63ea9ebad9",
        "host": "localhost:3000",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive",
        "content-length": "42"
    }
}
```

### Atividade de Reforço

1. Usando o **Postman**, faça requisições "GET" sem o parâmetro (`http://localhost:3000/`) e com o parâmetro "ID" (`http://localhost:3000/10`) e compare as duas, tentando identificar as diferenças e similaridades entre elas.



## Salve a Atividade

 - Volte ao GitHub Desktop;
 - Observe a coluna esquerda, onde aparecem as alterações salvas no Git stage;
 - No final, escreva a mensagem de Git commit no campo menor;
 - Opcionalmente, você pode inserir uma descrição mais detalhada deste commit no campo maior.
 - Clique no botão [Commit to...] logo abaixo da mensagem;
 - No painel principal, clique no botão [Pull origin] para salvar branch atual no GitHub.com.

---
[← Arquivo de Configuração](https://github.com/Luferat/express.test/tree/Atividade.02_Arquivo_de_configura%C3%A7%C3%A3o) || **Verbos HTTP** || Verbos HTTP (getAll e getOne) →
