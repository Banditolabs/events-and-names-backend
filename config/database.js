// Database Connection
const mongoose = require ('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('open', () => console.log('Mongoose'))
.on('close', ()=> console.log('connection close'))
.on('error', (error)=> console.log(error))