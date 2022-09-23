const express = require('express');
const AlunoController = require('../controllers/AlunoController');
const ResponsavelController = require('../controllers/ResponsavelController');

const routes = express.Router();

routes.post('/alunos', AlunoController.index);
routes.post('/aluno', AlunoController.show);

routes.get('/responsaveis', ResponsavelController.index);
routes.post('/responsavel', ResponsavelController.store);

module.exports = routes;