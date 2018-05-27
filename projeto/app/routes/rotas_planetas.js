// routes/rotas_planetas.js
var express = require('express');
var router = express.Router();

// Página de boas vindas da apistarwars
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Bem-vindo a ApiBackEnd!');
});

// 1) Método: Adicionar um planeta ==> POST http://localhost:8000/api/planetas)  
router.post('/planetas/add', function (req, res) {
 
    var db = require("../models/planeta");
    var planetaNome = req.body.nome;
    var planetaClima = req.body.clima;
    var planetaTerreno = req.body.terreno;
    var planetaNumFilmes = req.body.num_filmes;
 
    var Planetas = db.Mongoose.model('Planetas', db.PlanetaSchema, 'Planetas');
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

// 2) Método: Listar planetas ==> GET http://localhost:8000/api/planetas
router.get('/planetas', function(req, res) {
    var db = require("../models/planeta");
    var Planetas = db.Mongoose.model('Planetas', db.PlanetaSchema, 'Planetas');
    
    Planetas.find().lean().exec(function (err, users) {
       res.end(JSON.stringify(users));
    });

 });

module.exports = router;