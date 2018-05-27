// routes/index.js

const rotasPlanetas = require('./rotas_planetas');
module.exports = function(app, db) {
  rotasPlanetas(app, db);
  // Other route groups could go here, in the future
};