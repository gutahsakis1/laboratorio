# **Laboratório**

## **Informações sobre o Projeto:**
  *Para executar o projeto, será necessário instalar os seguintes programas:
  
  * NodeJS
  * Banco de Dados PgAdmin 4
  * Utilizada dependencias do Node: nodemon - express - body - pg - cors
 	npm i -g nodemon@1.19.4 && npm i --save express@4.17.1 && npm i --save body-parser@1.19.0 && npm i --save config@3.2.3
        npm i cors express express-promise-router pg
  * O projeto contém a classe src que esta dividida em:
	* Config:
		* database - arquivo responsável por setar as configurações da conexão com o BD: PostgreSQL
	* controllers
		* atendimentos.controller - arquivo com os métodos para manipulação do BD.
	* routes
		* index -Responsável por realizar a chamada da API
		* routes - Rotas da api


 ## **Como executar:**
 	1. Necessário executar o script do BD em ./api/script sql para realizar a criação das tabelas utilizadas no projeto
 	2. Alterar a classe ./api/src/config/database.js com as informações do banco de dados
 	3. A porta utilizada para conexão é a 3000, caso necessário utilizar outra, alterar em ./api/server.js.
 	4. Utilizar alguma ferramenta de execução, como por exemplo o Postman, para realizar a verificação das rotas.
 	Para incluir: POST - /atendimentos/paciente
 	Para alterar: PUT - /atendimentos/atendimento/{codigo_atendimento}
 	Para listar um paciente: GET - /atendimento/pacientes/{codigo-paciente}
 	Para cancelar: POST - /atendimentos/atendimento/{codigo_atendimento}


## **Observações:**
	* Para incluir um atendimento ao inves da rota ser POST - /atendimentos/paciente/{codigo-paciente} ficou POST - /atendimentos/paciente pois ao inserir um atendimento deverá ser informado além do codigo do pacientas, as outras informações da tabela, como data, local e serviço.
	* Foi definido criar uma tabela separada para os "serviços", e na hora de inserir um atendimento é necessário apenas incluir o codigo do serviço (que já deve estar cadastrado na tabela).
	* No método cancelar foi definido que seja excluido o atendimento ao invés de cancelar, acredito que o ideal seria criar um campo novo para inserção do Status do atendimento, dessa forma ao invés de excluir, apenas o status seria alterado para "Cancelado". Porém não deu tempo para finalizar essa rotina dessa forma.
