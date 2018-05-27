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

// Conexão com o banco
var mongoose = require('mongoose');
var Planeta = require('./app/models/planeta');

mongoose.connect('mongodb://localhost:27017/starwars');

// Configuração do app para usar o boduParser()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Rotas
var router = express.Router();

// Middleware para usar em todos os requests enviados para a API
router.use(function(req, res, next) {
   console.log('Algo está acontecendo aqui...');
   next();
});

//Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/api): 
router.get('/', function(req, res) {
    res.json({ message: 'Servidor apiBackEnd iniciado...' })
});

router.post('/notes', (req, res) => {
      // You'll create your note here.
      res.send('Hello')
    });


//API's:
//==============================================================================

//Rotas '/planetas' 'GET ALL' e 'POST'
router.route('/planetas')

    // 1) Método: Adicionar um planeta POST http://localhost:8000/api/planetas)  
    .post(function(req, res) {
        var planeta = new Planeta();

        planeta.nome = req.body.nome;
        planeta.clima = req.body.clima;
        planeta.terreno = req.body.terreno;
        planeta.num_filmes = req.body.num_filmes;

        console.log("nome:" + planeta.nome);
        console.log("clima:" + planeta.clima);
        console.log("terreno:" + planeta.terreno);
        console.log("num_filmes:" + planeta.num_filmes);

        //res.send('Hello Ok');
        
        planeta.save(function(error) {
            console.log("Saving...");
            if(error) 
                rs.send('Erro ao adicionar o Planeta....: ' + error);
            
            res.json({ message: 'Planeta adicionado!' });
        });
    
    });

router.post('/adduplaneta', function (req, res) {
 
        //var db = require("../db");
        var planetaNome = req.body.nome;
        var planetaClima = req.body.clima;
        var planetaTerreno = req.body.terreno;
        var planetaNumFilmes = req.body.num_filmes;
     
        var Planetas = Planeta.Mongoose.model('Planetas', Planeta.PlanetaSchema, 'Planetas');
        var planeta = new Planetas({ nome: planetaNome, clima: planetaClima, terreno: planetaTerreno, num_filmes: planetaNumFilmes});
        planeta.save(function (err) {
            if (err) {
                console.log("Error! " + err.message);
                res.send('Erro ao adicionar o Planeta....: ' + error);
                return err;
            }
            else {
                console.log("Planeta adicionado!");
                res.json({ message: 'Planeta adicionado!' });
            }
        });
 });    

//Definindo um padrão das rotas prefixadas: '/api':
app.use('/apistarwars', router);

// End Rotas

// Definição da porta para levantar o ApiBackend
var port = process.env.port || 8000;



// Iniciamdo o servidor ApiBackend
app.listen(port);
console.log(" ApiBackend iniciado na porta " + port);