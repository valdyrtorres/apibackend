// routes/rotas_planetas.js
var express = require('express');
var router = express.Router();

// Página de boas vindas da apistarwars
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Bem-vindo a ApiBackEnd!');
});

// 1) Método: Adicionar um planeta ==> POST http://localhost:8000/apistarwars/planetas/add)  
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

// 2) Método: Listar planetas ==> GET http://localhost:8000/apistarwars/planetas
router.get('/planetas', function(req, res) {
    var db = require("../models/planeta");
    var Planetas = db.Mongoose.model('Planetas', db.PlanetaSchema, 'Planetas');
    
    Planetas.find().lean().exec(function (err, planetas) {
       if(err)
           res.send('Erro ao selecionar todos os planetas:' + err);
       else 
           res.json(planetas);
    });

});

 // 4) Método: Buscar planeta por id ==> GET http://localhost:8000/apistarwars/planetas/:planeta_id
 router.get('/planetas/:planeta_id', function(req, res) {
    var db = require("../models/planeta");
    var Planetas = db.Mongoose.model('Planetas', db.PlanetaSchema, 'Planetas');
    
    Planetas.findById(req.params.planeta_id, function (err, planeta) {
       if(err)
           res.send('Planeta não encontrado:' + err);
       else
           res.json(planeta);
    });

});

 // 5) Método: Remover planeta ==> DELETE http://localhost:8000/apistarwars/planetas/del/:planeta_id
 router.delete('/planetas/del/:planeta_id', function(req, res) {
    var db = require("../models/planeta");
    var Planetas = db.Mongoose.model('Planetas', db.PlanetaSchema, 'Planetas');
    
    Planetas.remove({
       _id: req.params.planeta_id
       },function(err) {
           if(err)
              res.send('Planeta não encontrado:' + err);
           else
              res.json({ message: 'Planeta excluído!'});
       }
    );

});

// 6) Método: Atualizar planeta por id ==> PUT http://localhost:8000/apistarwars/planetas/:planeta_id
router.put('/planetas/:planeta_id', function(req, res) {
    var db = require("../models/planeta");
    var Planetas = db.Mongoose.model('Planetas', db.PlanetaSchema, 'Planetas');
    
    Planetas.findById(req.params.planeta_id, function (err, planeta) {
       if(err)
           res.send('Planeta não encontrado:' + err);
       else {
           planeta.nome = req.body.nome;
           planeta.clima = req.body.clima;
           planeta.terreno = req.body.terreno;
           planeta.num_filmes = req.body.num_filmes;

           planeta.save(function(err) {
               if(err)
                   res.send('Erro ao atualizar o planeta:' + err);
               else res.json({ message: 'Planeta atualizado!'});
           });
       }

    });

});

module.exports = router;