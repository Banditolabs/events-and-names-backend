const express = require('express')
const router = express.Router()
const peopleController = require('../controllers/people')

router.get('/', peopleController.index)

router.delete('/:id', peopleController.del)

router.put('/:id', peopleController.update)

router.post('/', peopleController.create)

module.exports = router