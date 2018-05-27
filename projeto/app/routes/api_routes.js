// routes/api_routes.js

var Planeta = require('../models/planeta');

module.exports = function(app, db) {

    app.use(function(req, res, next) {
        console.log('Algo está acontecendo aqui...');
        next();
    });

    app.post('/notes', (req, res) => {
        // You'll create your note here.
        console.log(req.body)
        res.send('Hello')
    });

    app.get('/apistarwars', function(req, res) {
        // Rota de inicio
        res.json({ message: ' ApiBackend do Jogo Star Wars'})
    });

    // 1) método: Adicionar um planeta com nome, clima e terreno
    //    acessar em POST http://localhost:8000/apistarwars/planetas
    app.post('/apistarwars/planetas', (req, res) => {
          var planeta = new Planeta();

          planeta.nome = req.body.nome;
          planeta.clima = req.body.clima;
          planeta.terreno = req.body.terreno;
          planeta.num_filmes = req.body.num_filmes;

          planeta.save(function(error){
              if(error)
                  res.send('Erro ao adicionar o planeta...' + erro);

              res.json({ message: 'Planeta adicionado'});
          });
      });

};
