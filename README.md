# Teste Voll (Back-end)

Este back-end foi desenvolvido para um teste técnico onde consiste na criação de uma plataforma para controle de pontos com loja virtual.
Front-end da aplicação: https://github.com/DanielHott/frontend-voll

## Detalhes da aplicação

O back-end possui 5 rotas para conectar o front-end ao banco de dados.

### Rota /login

Esta rota está disponível em https://backend-voll.herokuapp.com/login

#### POST 

A rota login recebe uma requisição do tipo POST onde deve conter um body json com um email(`string`) e senha(`string`) válidos e retorna as informações do usuário.
É utilizada na aplicação para realizar o login.

Para o administrador:
Email:`admin@voll.com` Senha: `1234567`

Para o Usuário:
Email:`user@voll`.com Senha: `1234567`

#### PATCH

A rota login recebe uma requisição do tipo PATCH onde deve conter um body json com um email(`string`) e coins(`number`), que representam as moedas do usuário
e retorna as informações do usuário com seu novo saldo de moedas.

É utilizado na área de atualização de moedas do usuário. 

### Rota /user

Esta rota está disponível em https://backend-voll.herokuapp.com/user

#### POST

A rota user é utilizada com um post para recuperar as informações do usuário com um body json contendo apenas o email(`string`). Retorna as informações do usuário.

É utilizado para recuperar informações do usuário na página de produtos.

### Rota /products

Esta rota está disponível em https://backend-voll.herokuapp.com/products

#### GET

Esta rota do tipo get é utilizada para obter todos os produtos.

#### POST

A rota do post é utilizada para criar um novo produto. Deve receber um body json com name(`string`), description(`string`), coins(`number`), image(`string`).

## Tecnologias

Este back-end foi desenvolvido com node.js, sequelize, express, dotenv, cors, nodemon e banco de dados online com supabase em postgres.
No processo de desenvolvimento utilizei mysql para usar o banco de dados da minha máquina.

## Copiando para sua máquina:

Clone o projeto

```bash
  git clone https://github.com/DanielHott/backend-voll.git
```

Entre no diretório do projeto

```bash
  cd backend-voll
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start

