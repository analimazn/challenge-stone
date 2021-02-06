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
    1. [Sobre data](#data-folder)
    2. [Sobre src/services](#services-folder)
    3. [Sobre tests/mocks](#tests-mocks)
    4. [Sobre tests/services](#tests-services)
6. [Dependências de desenvolvimento](#dev-dependencies)

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

Para instalar as dependências utilize as linhas de comando do [`yarn`](https://classic.yarnpkg.com/en/docs/cli/install/) ou [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally), demonstradas a seguir:

```sh
  yarn install
```

```sh
  npm install
```

## Inicializando a aplicação

Caso você deseje realizar o procedimento com a lista de valores randômicos que é gerada automaticamente, utilize o comando a seguir:

```sh
  npm run randomValues <QUANTITY_ITEMS> <QUANTITY_EMAILS>
```

**QUANTITY_ITEMS**: Valor inteiro da quantidade de itens que deseja processar.

**QUANTITY_EMAILS**: Valor inteiro da quantidade de emails que deseja processar.

Com essa opção, o programa irá gerar uma lista de `items` e `emails` aleatórios e irá armazená-la no arquivo `data/input.json`.


Caso contrário, utilize o comando a seguir:

```sh
  npm run specificValues
```

Com essa opção, o programa irá apenas realizar a leitura do arquivo `data/input.json` com os valores informados por você. Os valores desejados devem estar no seguinte padrão:

```sh
[
  {
    "items": [
      {
        "item"     : <type: String>,
        "quantity" : <type: Integer>,
        "price"    : <type: Integer>
      }
    ],
    "emails": [
      <type: String>
    ]
  }
]
```

## Testes

Para executar os testes, utilize o comando a seguir:

```sh
  npm run test
```

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

### Diretório **data**

O diretório `data` contém os arquivos de entrada e saída.


### Diretório **src/services**

O diretório `src/services` contém o arquivo `file.js`, responsável por realizar a leitura/escrita dos dados, e o arquivo `processItems.js`, responsável por processar os itens da lista.

### Diretório **tests/mocks**

O diretório `tests/mocks` contém o arquivo de entrada com os dados para realizar os testes.


### Diretório **tests/services**

O diretório `tests/services` contêm os arquivos de testes para os serviços criados em `src/services`.

## Dependências de desenvolvimento

- [jest](https://jestjs.io/): Framework responsável por automatizar testes.
