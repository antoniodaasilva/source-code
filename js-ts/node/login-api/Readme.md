Estrutura básica de uma API com Node.js

Inciar o projeto:
- npm init -y

Instalar dependencias:
- nodemon
- express
- express-async-errors
- sqlite sqlite3
- bcryptjs

Criar servidor do projeto
- ./src/server.js

Criar rotas da aplicação

Criar controllers da aplicação

Criar tratamento de erros

Configurar conexão com banco de dados

Criar migrations do banco de dados:
Iniciar Knex
- npx knex init
Configurar Knex 
Conectar Knex
Criar Config de migrations
Rodar comando de criação da migrations
- npx knex migrate:make "NOME DA TABELA"
- configurar migrations
- rodar migrate
 - npx knex migrate:latest


Estrutura de pastas

./src
  - /routes
  - /database
    - /sqlite
      - /migrations
    - /knex
      - /migrations
    - database.db
  - /controllers
  - /utils


