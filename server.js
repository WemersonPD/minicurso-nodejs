const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// HTTP
// GET, POST, DELETE, PUT
// GET - Pegar dados
// POST - Criar dados
// DELETE - Deletar dados
// PUT - Atualizar dados

// REST - Padrão estrutural e de regras
// RESTFUL - API que seguiu o padrão REST corretamente
// "/users" - POST;
// "/users/:id" - DELETE;

// Endpoints - Basicamente uma rota
// '/users'
// Cada chamada tem: Requisição, Resposta, Middleware
// Requisição - Front manda para o back (request): body, params ('/user/:id'), query ('users?idade=18'), headers
// Reposta - Back manda para o front (response): status, json
// Status da resposta:
// 1xx - Informação
// 2xx - Corretas
// 4xx - Erro do cliente
// 5xx - Erro de back-end

// Import all routes
require("./src/app/routes")(app);

app.listen(PORT, () => {
  console.log(`Server is runnig at port ${PORT}`);
});
