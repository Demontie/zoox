# Estagio de build
FROM node:12-slim as build
# faz da pasta 'app' o diretório atual para trabalho
WORKDIR /backend
# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY package*.json ./
COPY yarn* ./
# instala dependências da api
RUN yarn install
# copia arquivos e pastas para o diretório atual de trabalho (pasta 'app')
COPY . .

CMD ["yarn", "dev:server"]

