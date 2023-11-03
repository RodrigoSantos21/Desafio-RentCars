const db = require('../models')

const Veiculo = db.Veiculo

const adicionaVeiculo = async(req,res) => {

    let info = {
        locadora: req.body.locadora,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
        motor: req.body.motor,
        portas: req.body.portas,
        cambio: req.body.cambio,
        ar_condicionado: req.body.ar_condicionado
    }

    const veiculo = await Veiculo.create(info)
    res.status(200).send(veiculo)
}

// retorna todos os veiculos
const retornaVeiculos = async(req,res) => {
    let veiculos = await Veiculo.findAll({})
    res.status(200).send(veiculos)
}

// retorna um veiculo pelo id
const retornaUmVeiculo = async(req,res) => {
    let id = req.params.id
    let veiculo = await Veiculo.findOne({ where: {id:id}})
    res.status(200).send(veiculo)
}

// atualiza um veiculo pelo id
const atualizaVeiculo = async(req,res) => {
    let id = req.params.id

    const veiculo = await Veiculo.update(req.body, { where: { id: id }})

    res.status(200).send(veiculo)
}

// deleta um veiculo pelo id
const deletaVeiculo = async(req,res) => {
    let id = req.params.id

    await Veiculo.destroy({ where: { id: id }})

    res.status(200).send('Veiculo foi deletado!')
}

module.exports = {
    adicionaVeiculo,
    retornaVeiculos,
    retornaUmVeiculo,
    atualizaVeiculo,
    deletaVeiculo
}