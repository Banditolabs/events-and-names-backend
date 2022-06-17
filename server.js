const express = require('express')
const cors = require ('cors')

require('dotenv').config()
const app = express()

const eventRouter = require('./routes/events')
const peopleRouter = require('./routes/people')

app.use(cors())
app.use(express.json())
app.use('/events', eventRouter)
app.use('/people', peopleRouter)

const {PORT = 3035} = process.env
app.listen(PORT, () => console.log(`Listenting on ${PORT}`))