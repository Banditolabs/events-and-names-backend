const express = require ('express')
const cors = require('cors')
const morgan = require('morgan')
require('./config/database')

require('dotenv').config()
const app = express()

const eventRouter = require('./routes/events')
const peopleRouter = require('./routes/people')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use('/events/', eventRouter)
app.use('/people/', peopleRouter)

const {PORT = 3004} = process.env
app.listen(PORT, () => console.log(`Listenting on ${PORT}`))