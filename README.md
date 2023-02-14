# express.test
Aplicativo experimental em Node.js, Express e MySQL.

## Arquivo de Configuração
Antes de seguir as próximas etapas, verifique se preparou o [arquivo de configuração](https://github.com/Luferat/express.test/tree/Atividade.02_Arquivo_de_configura%C3%A7%C3%A3o).

## Verbos HTTP

> **Importante!**
>
> Como, a partir de agora, nossas requisições retornarão dados no formato JSON, é importante usar o [Postman](https://www.postman.com/) para executar os testes. As instruções para instalação dele [estão aqui](https://docs.google.com/document/d/1Zo42HZvGtEAx-9OjLX5Cr9J5SKl07NvUxLGSTSbWHpc/edit?usp=sharing).

### Versionando
 - Abra / retorne ao GitHub Desktop;
 - Confirme se o branch da última atividade está ativo → Por exemplo `2023.02.11.Configuracao`;
   - *O novo branch será criado à partir do branch anterior, já que estamos "incrementando" o aplicativo com novos recursos.*
 - Clique no menu Branch → New branch...;
 - Nomeie o branch da melhor forma, por exemplo: `2023.02.11.Verbos_HTTP`;
 - Clique no botão [Create branch].
 
### Respondendo às requisições 

Antes de criarmos os métodos que vão receber às requisições HTTP, vamos criar um método para responder à elas quando ocorrerem. Esse método serve apenas para testar as capacidades do Express HTTP e será posteriormente substituído pelos métodos adequados à cada requisição:

 - Pelo **VSCode**, abra o arquivo `index.js`;
 - Localize a linha onde obtemos a configuração com o nome do aplicativo:
```
// Configuração do nome do aplicativo.
const appName = conf.APP_NAME;
```
 - Logo abaixo dela, adicione o trecho de código abaixo:
```
// Ação a ser executada quando ocorre uma requisição HTTP.
const controller = {

  resJson: async (req, res) => {

    // Lista com alguns atributos úteis da requisição HTTP:
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

    // Envia dados na forma de texto (text/html).
    //res.send(data);

    // Envia dados na forma de JSON.
    res.json(data);

  }
}
```

> Esse trecho cria um  objeto `controller` com um método assíncrono `resJson` que vai gerar uma lista de atributos (`data`) que podemos usar, vindos com a requisição HTTP. O comando `res.json(data)` envia o conteúdo de `data` para o solicitante, no formato JSON.
 - Altere o método `app.get(...)` para executar o método `controller.resJson` que definimos acima:
```
// Rota para as requisições do método "GET".
app.get('/', controller.resJson);
```
Para testar, confirme se o serviço do aplicativo ainda está rodando no Node.js command prompt. Se necessário, encerre o serviço teclando `[Ctrl]+[C]` e logo em seguida, comande `nodemon index.js` para iniciá-lo mais uma vez.

Agora, no navegador, acesse o endereço `http://localhost:3000/`. A resposta deve ser um trecho JSON, parecido com:
```
{"method":"GET","url":"/","baseUrl":"","query":{},"originalURL":"/","params":{},"headers":{"host":"localhost:3000","connection":"keep-alive","cache-control":"max-age=0","sec-ch-ua":"\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"","sec-ch-ua-mobile":"?0","sec-ch-ua-platform":"\"Windows\"","upgrade-insecure-requests":"1","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","sec-fetch-site":"none","sec-fetch-mode":"navigate","sec-fetch-user":"?1","sec-fetch-dest":"document","accept-encoding":"gzip, deflate, br","accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7","if-none-match":"W/\"34-BXkHmUBy53s5lhskMYjesmM7Xo8\""}}
```
Para ter resultados melhores, inicie o **Postman**, abra uma nova sessão e acesse o endereço `http://localhost:3000/` usando o método "GET". O resultado será bem melhor do que o obtido no navegador, e deve ser algo como:
```
{
    "method": "GET",
    "url": "/",
    "baseUrl": "",
    "query": {},
    "originalURL": "/",
    "params": {},
    "headers": {
        "content-type": "application/json",
        "user-agent": "PostmanRuntime/7.30.1",
        "accept": "*/*",
        "postman-token": "fb36ad9f-4695-4271-bafe-4d2cb59792ef",
        "host": "localhost:3000",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive",
        "content-length": "42"
    }
}
```

### Atividade de Reforço

Analise a resposta da requisição `GET`, observando os valores das diversas chaves do JSON recebidas e que, ná prática, constam do cabeçalho HTTP da requisição. Tente explicar cada uma dessas chaves e seus valores, pesquisando na Web sobre os cabeçalhos HTTP.

## Salve a Atividade

 - Volte ao GitHub Desktop;
 - Observe a coluna esquerda, onde aparecem as alterações salvas no Git stage;
 - No final, escreva a mensagem de Git commit no campo menor;
 - Opcionalmente, você pode inserir uma descrição mais detalhada deste commit no campo maior.
 - Clique no botão [Commit to...] logo abaixo da mensagem;
 - No painel principal, clique no botão [Pull origin] para salvar branch atual no GitHub.com.

---
[← Arquivo de Configuração](https://github.com/Luferat/express.test/tree/Atividade.02_Arquivo_de_configura%C3%A7%C3%A3o) || **Verbos HTTP** || [Verbos HTTP (getAll e getOne) →](https://github.com/Luferat/express.test/tree/Atividade.04_Verbos_HTTP_GET)
