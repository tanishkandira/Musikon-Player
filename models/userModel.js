const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    playlist:{
        type: Array,
        required: false
    }
},{timestamps: true})

module.exports = mongoose.model('user', userSchema)