const express = require('express')
const router = express.Router()
const eventController = require('../controllers/events')


router.get('/', eventController.index)

router.delete('/:id', eventController.del)

router.put('/:id', eventController.update)

router.post('/', eventController.create)

router.get('/:id', eventController.show)

module.exports = router