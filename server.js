const express = require('express')
const app = express()
require('dotenv').config() // Use dotenv
const dbConfig = require('./config/dbConfig') //Import Node-Mongo connection 
app.use(express.json())
const userRoute = require('./routes/userRoute')
const songsRoute = require('./routes/songsRoute')


app.use('/api/users', userRoute)
app.use('/api/songs', songsRoute)
const port = 5000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))