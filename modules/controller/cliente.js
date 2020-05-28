'use strict'

const model = require('../../utils/modelLoader')
const crypto = require("crypto");

exports.read = (req, res) => {

    model.Cliente.findAll({

    }).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    });
};

exports.get = (req, res) => {
    const dados = req.body
    model.Cliente.login({
        where:{ CPF: req.params.CPF,
              Senha: req.params.Senha
        }
    }).then((data) => {
            
        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    });
};

exports.insert = (req, res) => {

    const dados = req.body

    model.Cliente
        .build(
            dados
        )
        .save()
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        })
}

exports.update = (req, res) => {

    const dados = req.body

    model.Cliente
        .update(dados, {
            where: {
                id: req.query.id
            }
        })
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        })
}

exports.delete = (req, res) => {

    const dados = req.body

    model.Cliente
        .destroy({
            where: {
                id: dados.params.id
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
}