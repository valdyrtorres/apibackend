/**
* Arquivo: server.js
* Descrição: Responsável por levantar o serviço do Node
* Author: Valdir Torres Borges
* Data de criação: 15/05/2018
*/

// Setup da App:

// Chamada dos pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var indexRouter = require('./app/routes/index'); // Rotas da Api
var Planeta = require('./app/models/planeta'); // Conexão com o banco

// Configuração do app para usar o bodyParser()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Rotas da Api
app.use('/apistarwars', indexRouter);

// End Rotas

// Definição da porta para levantar o ApiBackend
var port = process.env.port || 8000;

// Iniciamdo o servidor ApiBackend
app.listen(port);
console.log(" ApiBackend iniciado na porta " + port);