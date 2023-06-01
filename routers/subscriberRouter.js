const express = require('express');
const router = express.Router();

const SubscriberController = require('../controllers/subscriberController');

// Rota para criar um novo assinante
router.post('/assinantes', SubscriberController.criar);

// Rota para editar as informações de um assinante
router.put('/assinantes/:codigo', SubscriberController.editarInformacoes);

// Rota para listar todos os assinantes
router.get('/assinantes', SubscriberController.listarTodos);

// Rota para buscar um assinante por código
router.get('/assinantes/:codigo', SubscriberController.listarPorCodigo);

// Rota para listar assinantes por filtro
router.get('/assinantes/filtrar', SubscriberController.listarPorFiltro);

// Rota para deletar um assinante
router.delete('/assinantes/:codigo', SubscriberController.deletar);

module.exports = router;