'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controller/pais')

router.get('/paises', controller.read)
router.get('/pais/{:id}', controller.read)
module.exports = router