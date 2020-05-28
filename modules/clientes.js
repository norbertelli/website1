'use strict'

const modelLoader = require('../utils/modelLoader')

const routerCliente = require('./routes/clientes')

const models = [
    'modules/model/cliente'
]

exports.init = (app) => {

    app.use('/', routerCliente)

}