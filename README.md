apibackend criado por Valdir Torres

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

/apistarwars/planets/:planet_id	    GET	    Buscr por Id 
Ex: http://localhost:8000/apistarwars/planetas/5b0b43e43258ac452480b279

/apistarwars/planets/del/:planet_id	    DELETE	Remover planeta por Id
Ex: http://localhost:8000/apistarwars/planetas/del/5b0b43e43258ac452480b279

/apistarwars/planets/:planet_id	    PUT	    Atualizar planeta por Id
Ex: http://localhost:8000/apistarwars/planetas/5b0b60fb72e2982848f56784
Obs.: Caso o use o Postman marcar a opção x-www-form-urlencoded

Para executar a aplicação:
npm run dev 
obs.: Pode usar o comando node server.js também

Iniciar o mongo:
mongod --dbpath {PROJECT_PATH}\data
Ex: mongod --dbpath C:\projeto\data

Abrir a página da ApiStarWars:
http://localhost:8000/apistarwars