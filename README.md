📦 README - BACKEND
# 🚀 Backend - Desafio Minha Fábrica

Este é o backend da aplicação (API) desenvolvido com Node.js + Express + MongoDB.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- JavaScript
- Express
- MongoDB (Atlas)
- Mongoose
- Bcrypt
- JWT

---

## 📥 Instalação


Clone o repositório:
```bash
git clone https://github.com/GustavoHx09/desafio-minhafabrica.git
```

Se não estiver na pasta correta, de este comando no terminal:
```bash
cd desafiomf
```

Instale as dependências:
```bash
npm install
```

No frontend quando voce definiu a URI da api como:
```bash
http://localhost:3001
```

No arquivo server.js na raiz do projeto tem uma variável assim:
```bash
const PORT = 3001;
```

Elas tem que ter a mesma porta!

---

## ⚙️ Configuração do .env


Crie um arquivo .env na raiz do projeto:

```bash
MONGO_URI=sua_string_do_mongodb

JWT_SECRET=seu_segredo_jwt
```

👉 Essa variável (MONGO_URI) define a conexão com o banco de dados MongoDB

---

## ▶️ Rodando o projeto

No terminal:

```bash
npm start
```

A API estará disponível em:

```bash
http://localhost:3001
```

---

## ⚠️ IMPORTANTE (PORTAS)

Para rodar com frontend:

Backend → 3001
Frontend → 3000

👉 Não use a mesma porta nos dois

---

## 🔐 Autenticação

JWT é usado para autenticação
Token deve ser enviado no header para testes no postman:
```bash
Authorization: Bearer TOKEN
```

---

## 🗄️ Banco de Dados

O projeto usa MongoDB Atlas.

Exemplo d:
```bash
MONGO_URI= mongodb+srv://user:password@cluster.mongodb.net/database
```

---

## 🌱 Seed (Popular Banco)

Para popular o banco com dados de teste:
```bash
npm run seed
```

👉 Isso cria usuários e/ou dados iniciais automaticamente

---

## 📌 Rotas principais

Auth
- POST /api/v1/auth/login

Usuários
- GET /api/v1/users
- POST /api/v1/users
- PUT /api/v1/users/:id
- DELETE /api/v1/users/:id

Produtos
- CRUD completo

---

## 🔒 Segurança

- Senhas criptografadas com bcrypt
- Autenticação via JWT
- CORS configurado

---

## 🌐 CORS

Certifique-se de permitir o link do frontend no arquivo /src/app.js:

```bash
origin: "http://localhost:3000";
```

---

##❗ Problemas comuns

- ❌ Erro de CORS
Verifique configuração do cors

- ❌ Erro 500
Verifique logs do backend

- ❌ Mongo não conecta
Verifique MONGO_URI

---

## 📦 Estrutura

- controllers → lógica de rota
- services → regras de negócio
- repositories → acesso ao banco
- routes → endpoints

---

## 📄 Licença

Este projeto é apenas para fins de estudo!

---