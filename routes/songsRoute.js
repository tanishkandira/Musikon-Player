const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware')
const Song = require('../models/songModel')

router.post('/get-all-songs', authMiddleware, async (req,res)=>{
    try{
        const songs = await Song.find()
        res.status(200).send({message: "Songs fetched successfully", success: true, data: songs})
    }catch(error){
        res.status(500).send({message: "Error fetching songs", success: false, data: error})
    }
})

module.exports = router