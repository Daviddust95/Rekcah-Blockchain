# Blockchain em Node.js

Este é um projeto de blockchain simples em Node.js. Ele implementa uma blockchain e fornece uma API básica para interagir com a blockchain.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado na sua máquina.

## Instalação

1. Clone o repositório para sua máquina local:

- ```shell
  git clone https://github.com/Daviddust95/Rekcah-Blockchain.git

2.  Navegue até o diretório do projeto:
- ```shell
  cd blockchain-nodejs

4.  Instale as dependências do projeto:
- ```shell
  npm install express
- ```shell
  npm install cors
## Uso
Para iniciar o servidor e usar a blockchain, execute o seguinte comando:
- ```shell
  npm start
O servidor estará em execução em localhost:3000.

## Rotas da API

Obter Blocos
Endpoint: /api/blocks

Método: GET

Descrição: Esta rota retorna a lista de todos os blocos na blockchain.

## Minerar um Bloco
Endpoint:
/api/mine
Método: POST
Esta rota permite minerar um novo bloco na blockchain. Para minerar um bloco, envie um objeto JSON no formato { "data": "Seus dados aqui" }. O novo bloco conterá os dados fornecidos.
Exemplo de Uso:

Obter Blocos
- ```shell
  curl http://localhost:3000/api/blocks
Minerar um Bloco
- ```shell
  curl -X POST -H "Content-Type: application/json" -d '{ "data": "Seus dados aqui" }' http://localhost:3000/api/mine

Aviso
Este projeto ainda está em fase de desenvolvimento e implementação. Não é recomendado para uso em produção. Certifique-se de entender a tecnologia antes de usá-la.
## Contato
Se você tiver alguma dúvida, comentário ou feedback, sinta-se à vontade para entrar em contato:

- **Email:** alissondaviddev@gmail.com
- **LinkedIn:** [alisson-melo95](https://www.linkedin.com/in/alisson-melo95/) 
- **Site Pessoal:** [Portifólio](https://alissondev.tech)
- **GitHub:** [@Daviddust95](https://github.com/Daviddust95)
