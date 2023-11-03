// Definindo os Endpoints da API

const veiculoController = require ('../controllers/veiculoController.js')

const router = require ('express').Router()

// Rota para adicionar um veículo
router.post('/adicionaVeiculo', veiculoController.adicionaVeiculo)

// Rota para retornar todos os veículos
router.get('/retornaVeiculos', veiculoController.retornaVeiculos)

// Rota para detalhar um veículo com base no ID
router.get('/:id', veiculoController.retornaUmVeiculo)

// Rota para editar um veículo com base no ID
router.put('/:id', veiculoController.atualizaVeiculo)

// Rota para deletar um veículo com base no ID
router.delete('/:id', veiculoController.deletaVeiculo)


module.exports = router