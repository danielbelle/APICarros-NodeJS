const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

//READ rota para pegar todos
router.get('/carros', CarroController.buscarTodos);

//READ rota para pegar um
router.get('/carro/:codigo', CarroController.buscarUm);

// CREATE rota para criar um
router.post('/carro', CarroController.inserir);

// UPDATE rota para fazer update em dado
router.put('/carro/:codigo', CarroController.alterar);

// DELETE rota para deletar um dado
router.delete('/carro/:codigo', CarroController.excluir);


module.exports = router;