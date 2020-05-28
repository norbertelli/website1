'use strict'

const model = require('../../utils/modelLoader')

exports.read = (req, res) => {

    model.Pais.findAll({

    }).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    });
};
exports.read = (req, res) => {

    model.Pais.findbyid({
        where:{
            id: req.parameters.id
        }

    }).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    });
};
