const express = require('express')
const router = express.Router()
const EventController = require('../controllers/events')

router.post('/', EventController.create)

module.exports = router