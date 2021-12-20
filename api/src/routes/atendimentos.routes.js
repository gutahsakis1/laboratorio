/**
 * Descrição: Rotas da api.
 * Data: 20/12/2021
 * Author Maria Sakis
 */

const router = require('express-promise-router')();
const atendimentosController = require('../controllers/atendimentos.controller');

// ==> Definindo as rotas do CRUD:

router.post('/atendimentos/paciente', atendimentosController.criarAtendimento);
router.get ('/atendimento/pacientes/:codigo_paciente', atendimentosController.listarAtendimentosCod);
router.put('/atendimentos/atendimento/:id', atendimentosController.alterarAtendimento);
router.post('/atendimentos/atendimento/:id', atendimentosController.cancelarAtendimento);

module.exports = router;