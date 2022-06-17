const mongoose = require ('mongoose')

const PersonSchema = new mongoose.Schema ({
    name: String
})
const Person = mongoose.model ('People', PersonSchema)
module.exports = Person