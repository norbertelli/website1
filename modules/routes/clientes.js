'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controller/cliente')

router.get('/Clientes', controller.read)
router.post('/Clientes/?', controller.read)
router.post('/cliente', controller.insert)
router.post('/cliente', controller.update)
router.post('/cliente', controller.delete)

module.exports = router