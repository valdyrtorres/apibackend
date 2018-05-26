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

 // Configuração do app para usar o boduParser()
 app.use(bodyParser.urlencoded({ extended: true}));
 app.use(bodyParser.json());

 // Definição da porta para levantar o ApiBackend
 var port = process.env.port || 8000;

 // Por meio do framework express, criamos o roteador
 var router = express.Router();

 // Rota de inicio
 router.get('/', function(req, res) {
     res.json({ message: ' ApiBackend do Jogo Star Wars'})
 });

 // Definindo o padrão das rotas: '/api'
 app.use('/api', router);

 // Iniciamdo o servidor ApiBackend
 app.listen(port);
console.log(" ApiBackend iniciado na porta " + port);