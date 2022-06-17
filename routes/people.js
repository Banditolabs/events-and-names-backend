const express = require('express')
const router = express.Router()
const PeopleController = require('../controllers/people')

router.post('/', PeopleController.create)

module.exports = router