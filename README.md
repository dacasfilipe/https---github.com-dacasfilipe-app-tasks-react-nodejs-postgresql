# app-backend-node-express-postgresql
# API RESTful - CRUD de Livros

Essa API RESTful permite realizar operações CRUD (Create, Read, Update, Delete) na tabela de livros 
de um banco de dados PostgreSQL.

## Instalação
você deve primeiro abrir um terminal no seu Sistema operacional e acessar a pasta deste projeto após fazer o download.

Para instalar as dependências do projeto, execute o seguinte comando no terminal e depois tecle enter:

npm install

## Configuração

Crie um arquivo `.env` na raiz do projeto e preencha as seguintes variáveis de ambiente:
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco_de_dados


## Execução

Para iniciar o servidor, execute o seguinte comando:

nodemon app


## Endpoints

### 1. Adicionar Livro

- URL: `/livros/`
- Método: `POST`
- Body:

```json
{
  "titulo": "Título do Livro",
  "autor": "Autor do Livro",
  "ano": 2022,
  "preco": 25.99,
  "foto": "URL da foto"
}

### 2. Listar Livros
URL: /livros
Método: GET

### 3. Obter Livro por ID
URL: /livros/:id
Método: GET

### 4. Atualizar Livro 
//insira os valores que deseja atualizar no body
URL: /livros/:id
Método: PUT
Body:
{
  "titulo": "Título do Livro Atualizado",
  "autor": "Autor do Livro Atualizado",
  "ano": 2022,
  "preco": 29.99,
  "foto": "URL da foto atualizada"
}

### 5. Remover Livro
//em :id substitua pelo id do livro que deseja excluir do banco de dados
URL: /livros/:id
Método: DELETE


### Licença
Este projeto está licenciado sob a licença MIT.

