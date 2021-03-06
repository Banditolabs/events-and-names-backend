const mongoose = require ('mongoose')

mongoose.connect (process.env.DATABASE_URL)
const db = mongoose.connection

db.on('open', () => console.log('Mongoose'))
.on('close', () => console.log('connection closed'))
.on('error', (error) => console.log(error))