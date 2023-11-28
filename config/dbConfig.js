const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection

connection.on('connected',()=>{
    console.log('MongoDB is Connected') //Connection successful
})


connection.on('error',(err)=>{
    console.log(err) //Connection problem
})

module.exports = connection