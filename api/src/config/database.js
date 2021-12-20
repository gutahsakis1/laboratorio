/**
 * Descrição: arquivo responsável por setar as configurações da conexão com o BD: PostgreSQL.
 * Data: 20/12/2021
 * Author: Maria Sakis
 */

const Pool = require("pg").Pool;
const pool = new Pool({
    user:'postgres', // usuário
    host:'localhost', //host
    database:'laboratorio', // base
    password:'postgres', //senha
    port:'5432' //porta
});

module.exports = pool;