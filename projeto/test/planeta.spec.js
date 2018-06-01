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
var supertest = require("supertest");
var urlBase = "http://localhost:8000/apistarwars/planetas";
var server = supertest.agent(urlBase);
var idPlaneta = "";

describe("Teste apiBackend apistarwars POST /planetas/add",function(){
  this.timeout(15000);

  it("1 - Teste adicionar um planeta com /apistarwars/planetas/add",function(done){
    server.post('/add')
    .send({
      nome : 'Naboo',
      clima : 'temperate',
      terreno : 'grassy hills, swamps, forests, mountains'
    })
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.should.have.property('message');
      res.body.message.should.equal('Planeta adicionado!');
      done();
    });
  });

});

describe("Teste apiBackend apistarwars GET",function(){
    this.timeout(15000);

    // Teste lista planetas
    it("2 - Teste listar planetas",function(done){
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
    it("3 - Buscar planeta por nome. Ex: Buscar o planeta Naboo",function(done){
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

          if(_body[0].should.have.property('_id')){
            idPlaneta = _body[0]._id;
          }
  
          done(); 
        }
      );
    });

    // Teste buscar planeta por id
    it("4 - Buscar planeta por id. Ex: Buscar pelo id do planeta Naboo",function(done){
      request.get(
        {
          url : urlBase + "/buscaporid/" + idPlaneta 
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

          // Porque espera-se o mesmo nome, pois foi o id criado no teste anterior
          if(_body.should.have.property('_id')){
            expect(_body._id).to.equal(idPlaneta);
          }
  
          done(); 
        }
      );
    });
});    

describe("Teste apiBackend apistarwars DELETE /planetas/del",function(){
  this.timeout(15000);

  // Teste deletar planeta por id
  it("5 - Deletar planeta por id. Ex: Deletar pelo id do planeta Naboo",function(done){
    server.delete('/del/' + idPlaneta).end(function(error, res) {
      if (error) {
        throw error;
      }
      expect(res.statusCode).to.equal(200);
      res.body.should.have.property('message');
      res.body.message.should.equal('Planeta excluído!');
      done();
    });
  });

});
