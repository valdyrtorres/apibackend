/**
 * Teste de api para apiBackend
 * A API utilizada neste projeto eh
 * @see http://localhost:8000/
 *
 */

var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:8000/apistarwars/planetas";

// Criamos nosso primeiro caso de teste e fornecemos uma descricao utilizando describe
describe("Teste apiBackend apistarwars",function(){

    // Teste lista planetas
    it("Teste listar planetas",function(done){
      request.get(
        {
          url : urlBase + "/"
        },
        function(error, response, body){
  
          // precisamos converter o retorno para um objeto json
          var _body = {};
          try{
            _body = JSON.parse(body);
          }
          catch(e){
            _body = {};
          }
  
          // sucesso ==> 200
          expect(response.statusCode).to.equal(200);
          
          done(); 
        }
      );
    });
  
    // Teste buscar planete por nome
    it("Buscar planeta por nome. Ex: Buscar o planeta Naboo",function(done){
      request.get(
        {
          url : urlBase + "/Naboo" 
        },
        function(error, response, body){
  
          var _body = {};
          try{
            _body = JSON.parse(body);
          }
          catch(e){
            _body = {};
          }
  
          // sucesso ==> 200
          expect(response.statusCode).to.equal(200);
  
          if(_body[0].should.have.property('nome')){
            expect(_body[0].nome).to.equal('Naboo');
          }
  
          done(); 
        }
      );
    });
});    