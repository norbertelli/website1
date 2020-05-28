'use strict'

const modelLoader = require('../utils/modelLoader')

const routerPais = require('./routes/paises')

const models = [
    '../modules/model/pais'
]

exports.init = (app) => {

    app.use('/', routerPais)

}