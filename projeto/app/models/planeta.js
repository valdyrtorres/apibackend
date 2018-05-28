/*
* Arquivo: planeta.js
* Author:  Valdir Torres
* Descrição: arquivo com o modelo da classe Planeta
* Data: 17/05/2018
*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/starwars');
//mongoose.connect('mongodb://vtorres:test@ds235840.mlab.com:35840/starwars-mlab');

/*
*  Classe Planeta
*  ID: int
*  Nome: String
*  Clima: String
*  Terreno: String
*  Num_filmes: int
*  Nota: o ID já é inerente ao document do mongo */
var planetaSchema = new mongoose.Schema({
    nome: String,
    clima: String,
    terreno: String,
    num_filmes: Number
}, { collection: 'Planetas' }
);

module.exports = { Mongoose: mongoose, PlanetaSchema: planetaSchema }