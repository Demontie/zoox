### Requerido
* [Docker installed](https://www.docker.com/)


## Sobre
Este projeto de um teste pratico para um cadastro de cidades e estados.

Este projeto foi construído utilizando as tecnlologias mais populares de JavaScript,Typescript, Vue e mongo.

Se você ainda não baixou as partes, você vai encontrar elas abaixo, siga os passos para uma instalação correta:
- [(1/2) Api](https://github.com/Demontie/zoox/tree/main/backend)
- [(2/2) Web](https://github.com/Demontie/zoox/tree/main/frontend)



## Instalação na maquina local


```bash
# Clonar repositório
$ git clone https://github.com/Demontie/zoox.git
```

#### Rodar frontend

```bash
# Pasta do clone
$ cd frontend

# Variáveis de ambiente
$ cp .env.example .env

# Instalar dependências
$ yarn install

# Execute a aplicação
$ yarn serve
```

#### Rodar backend

```bash
# Pasta do clone
$ cd backend

# Variáveis de ambiente
$ cp .env.example .env

# Configuração para o banco de dados é importante preencher o ormconfig.json corretamente para conexão com o banco
$ cp ormconfig.example.json ormconfig.json

# Instalar dependências
$ yarn install

# Execute a aplicação
$ yarn dev:server
```


### Instalação utilizando [docker](https://www.docker.com/).


```bash
# Clonar repositório
$ git clone https://github.com/Demontie/zoox.git

# Pasta do clone
$ cd zoox

# Crie o arquivo .env com base no modelo .env.example é importante preencher o .env corretamente.
$ cp frontend/.env.example frontend/.env

$ cp backend/.env.example backend/.env

# Configuração para o banco de dados é importante preencher o ormconfig.json corretamente para conexão com o banco
$ cp backend/ormconfig.example.json backend/ormconfig.json

# Subir a aplicação
$ docker-compose up -d --build
```

## Obervação

Caso utilize o docker dentro do arquivo ormconfig.json utilizar 'zoox_db' no 'host' para que o container identifique o banco que irá utilizar