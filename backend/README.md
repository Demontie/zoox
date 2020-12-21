## Especificações
- Node >= 12.18.3
- Docker >= 19.03.12
- yarn >= 1.22.5


## Instalação na maquina local


```bash
# Clonar repositório
$ git clone https://github.com/Demontie/zoox.git


# Pasta do backend
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
