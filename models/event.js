const mongoose = require('mongoose')
const person = require('./person').schema

const EventSchema = mongoose.Schema ({
        title: String,
        people: [person]
})
const Event = mongoose.model ('Event', EventSchema)
module.exports = Event