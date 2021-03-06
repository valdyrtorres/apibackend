apibackend criado por Valdir Torres
Raiz do projeto ==> /apibackend/projeto


Modelo de dados:


Mongo (nosql)


Tabela Planet

ID: int

Nome: String

Clima: String

Terreno: String

num_filmes: int


Consulta a api https://swapi.co para saber a quantidade de filmes em que o planeta em questão apareceu

Exemplo: Naboo

https://swapi.co/api/planets/?search=naboo



host da api: http://localhost:8000

Uso da apibackend:

/apistarwars/planetas/add	        POST	Adicionar um planeta

Ex: http://localhost:8000/apistarwars/planetas/add

Obs.: Caso o use o Postman marcar a opção x-www-form-urlencoded


/apistarwars/planetas	            GET	    Listar todos os planetas do banco

Ex: http://localhost:8000/apistarwars/planetas


/apistarwars/planets/:nome	        GET	    Buscar por nome de planeta

Ex: http://localhost:8000/apistarwars/planetas/Naboo


/apistarwars/planets/buscarporid/:planet_id	    GET	    Buscr por Id 

Ex: http://localhost:8000/apistarwars/planetas/buscarporid/5b0b43e43258ac452480b279


/apistarwars/planets/del/:planet_id	    DELETE	Remover planeta por Id

Ex: http://localhost:8000/apistarwars/planetas/del/5b0b43e43258ac452480b279


/apistarwars/planets/:planet_id	    PUT	    Atualizar planeta por Id

Ex: http://localhost:8000/apistarwars/planetas/5b0b60fb72e2982848f56784

Obs.: Caso o use o Postman marcar a opção x-www-form-urlencoded


Para executar a aplicação npm run dev: 

Exemplo:
cd C:\apibackend\projeto
C:\apibackend\projeto> npm run dev 

obs.: Pode usar o comando node server.js também


Iniciar o mongo:

mongod --dbpath {PROJECT_PATH}\data

Ex: mongod --dbpath C:\projeto\data

Obs: O projeto funciona bem com uma base zerada também

Abrir a página da ApiStarWars:
http://localhost:8000/apistarwars

Testes:

Antes de tudo, caso não tenha os pacotes mocha, chai, should e supertest instalados, aplique na raiz do projeto:
npm install mocha -g --save-dev
npm install chai --save-dev
npm install should --save-dev
npm install supertest --save-dev

Na raiz do projeto (/apibackend/projeto por exemplo), digite mocha, pois vai testar tudo que está contido
no arquivo planeta.spec.js dentro do diretório test.

Exemplo:
cd C:\apibackend\projeto
C:\apibackend\projeto> mocha

Resultados esperados:

  Teste apiBackend apistarwars POST /planetas/add
    √ 1 - Teste adicionar um planeta com /apistarwars/planetas/add 

  Teste apiBackend apistarwars GET
    √ 2 - Teste listar planetas
    √ 3 - Buscar planeta por nome. Ex: Buscar o planeta Naboo 
    √ 4 - Buscar planeta por id. Ex: Buscar pelo id do planeta Naboo

  Teste apiBackend apistarwars DELETE /planetas/del
    √ 5 - Deletar planeta por id. Ex: Deletar pelo id do planeta Naboo


  5 passing (2s)
