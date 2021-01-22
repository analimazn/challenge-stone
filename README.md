## Challenge Stone

```
Nodejs
node: v15.6.0 
npm: 7.4.0 
```
1. [Desafio](#challenge)
2. [Instalação](#installation)
3. [Inicializando a aplicação](#run-app)
4. [Testes](#run-tests)
5. [Estrutura do Projeto](#concept-of-structure)
    1. [Sobre Logos](#logos-folder)
    2. [Sobre Public](#public-folder)
    3. [Sobre Controllers](#controllers-folder)
    4. [Sobre DB](#db-folder)
    5. [Sobre Models](#models-folder)
    6. [Sobre Services](#services-folder)
    7. [Sobre Utils](#utils-folder)
6. [Dependências do projeto](#dependencies)
7. [Dependências de desenvolvimento](#dev-dependencies)

## Desafio

Imagine uma lista de compras. Ela possui:

    Itens
    Quantidade de cada item
    Preço por unidade/peso/pacote de cada item

Desenvolva uma função (ou método) que irá receber uma lista de compras (como a detalhada acima) e uma lista de e-mails. Aqui, cada e-mail representa uma pessoa.

A função deve:

    Calcular a soma dos valores, ou seja, multiplicar o preço de cada item por sua quantidade e somar todos os itens
    Dividir o valor de forma igual entre a quantidade de e-mails
    Retornar um mapa/dicionário onde a chave será o e-mail e o valor será quanto ele deve pagar nessa conta
    
    
## Instalação

Para instalar as dependências utilize as linhas de comando do [`yarn`](https://classic.yarnpkg.com/en/docs/cli/install/) ou [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
yarn install
```

```sh
npm install
```

## Inicializando a aplicação

É 

```sh
npm start
```

O projeto rodará localmente na porta especificada no arquivo `.env`, de acordo com o exemplo `http://localhost:PORT/`. Caso nenhuma porta seja especificada a execução ocorrerá na porta padrão `3000` e você poderá acessar pelo endereço [http://localhost:3000/](http://localhost:3000/).


## Estrutura do projeto

```
│   index.js
│
├───data
│       input.json
│       output.json
│       
├───src
│   └───services
│           file.js
│           processItems.js
│           
└───tests
    ├───mocks
    │       input.json
    │       
    └───services
            file.test.js
            processItems.test.js
```

### Diretório **`data**

O diretório `data` contém os arquivos de .


### Diretório **public**

O diretório `public` contém um arquivo estático `.json` com as informações dos Meetups para a região de Joinville.


### Diretório **DB**

O diretório DB contém os arquivos necessários para a criação das tabelas e inserção dos dados, de acordo com a biblioteca`knex`.

**migrations**: Arquivos `.js` com a estrutura das tabelas.

**seeds**: Arquivos `.js` que realizam a leitura dos dados do arquivo estático localizado em `/public` e insere-os nas tabelas criadas.


### Diretório **models**

O diretório de `models` contém as queries que serão executadas no banco de dados para filtrar as informações necessárias.


### Diretório **services**

O diretório de `services` disponibiliza os dados retornados pela `model` em uma formatação padronizada.


### Diretório **controllers**

O diretório de `controllers` é responsável por controlar a comunicação entre as requisições feitas do cliente para com a aplicação.
Todas as requisições recebidas possuem um `service` que será responsável por realizar a conexão com o banco de dados e retornar o dado no formato padrão.


### Diretório **utils**

O diretório de `utils` contém funções genéricas que podem auxiliar em pequenas formatações de dados na aplicação.


### Arquivo **routes**

O arquivo de `routes.js` contém todas as rotas disponíveis na aplicação:

- Os métodos disponíveis são ( **GET** )


**GET** /meetups -> Retorna via `.json` todos os meetups cadastrados no banco de dados, de acordo com o seguinte formato:

```
{
  "success" : <type: Boolean>,
  "message" : <type: String>,
  "data" : [
    {
      "id"         : <type: Integer>,
      "name"       : <type: String>,
      "description": <type: String>,
      "url_logo"   : <type: String>,
      "next_event": {
        "id"            : <type: Integer>,
        "title"         : <type: String>,
        "datetime_init" : <type: DateTime_TZ>,
        "datetime_end"  : <type: DateTime_TZ>
      }
    }
  ]
}
```


**GET** /events/past/:meetupId -> Retorna via `.json` os eventos já realizados de um determinado meetup, de acordo com o seguinte formato:

```
{
  "success" : <type: Boolean>,
  "message" : <type: String>,
  "data" : [
    {
      "id"            : <type: Integer>,
      "title"         : <type: String>,
      "datetime_init" : <type: DateTime_TZ>,
      "datetime_end"  : <type: DateTime_TZ>,
      "participants"  : <type: Integer>,
      "meetup_id"     : <type: Integer>,
      "address" {
        "place"         : <type: String>,
        "neighborhood"  : <type: String>,
        "street"        : <type: String>,
        "number"        : <type: Integer>,
        "code"          : <type: String>,
        "city"          : <type: String>,
        "uf"            : <type: String>,
        "country"       : <type: String>
      }
    }
  ]
}
```


**GET** /events/current/:meetupId -> Retorna via `.json` os próximos eventos de um determinado meetup, de acordo com o seguinte formato:

```
{
  "success" : <type: Boolean>,
  "message" : <type: String>,
  "data" : [
    {
      "id"            : <type: Integer>,
      "title"         : <type: String>,
      "datetime_init" : <type: DateTime_TZ>,
      "datetime_end"  : <type: DateTime_TZ>,
      "participants"  : <type: Integer>,
      "meetup_id"     : <type: Integer>,
      "address" {
        "place"         : <type: String>,
        "neighborhood"  : <type: String>,
        "street"        : <type: String>,
        "number"        : <type: Integer>,
        "code"          : <type: String>,
        "city"          : <type: String>,
        "uf"            : <type: String>,
        "country"       : <type: String>
      }
    }
  ]
}
```


## Dependências

- [dotenv](https://www.npmjs.com/package/dotenv): Carrega variáveis de ambiente a partir de um arquivo `.env` dentro de `process.env`.
- [express](https://expressjs.com/): Framework para servidor web.
- [cors](https://www.npmjs.com/package/cors): CORS é um pacote `node.js` que pode ser utilizado para habilitar conexões para o servidor `express`.
- [moment](https://momentjs.com/): Biblioteca responsável por validar e manipular datas.
- [pg](https://node-postgres.com/): Cliente PostgreSQL para NodeJS.
- [knex](http://knexjs.org/): Biblioteca para criação de queries SQL.


## Dependências de desenvolvimento

- [nodemon](https://nodemon.io/): Biblioteca responsável por recarregar o servidor a cada atualização feita no projeto.
- [sqlite3](https://www.npmjs.com/package/sqlite3): Cliente SQLite para NodeJS.

