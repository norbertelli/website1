'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const Clientes = require('./modules/clientes')
const Paises = require('./modules/paises')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

Clientes.init(app)
Paises.init(app)

module.exports = app
