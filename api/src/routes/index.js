/** 
* Descrição: Responsável por realizar a chamada da API 
* Data: 20/12/2021 
* Autor Maria Sakis
*/ 

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a)!',
    version: '1.0.0',
  });
});

module.exports = router;