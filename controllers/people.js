const Person = require ('../models/event')

const create = async (req, res) => {
    try{
        res.json(await Person.create(req.body))
    }catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    create
}