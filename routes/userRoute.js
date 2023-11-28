const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken') // JWT
const authMiddleware = require('../middlewares/authMiddleware')
//User Register
router.post('/register', async (req,res)=>{
    //try-catch

    try{
        const password = req.body.password //user password
        const salt = await bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hashSync(password,salt) //hashed password
        req.body.password = hashedPassword
        const user = new User(req.body)
        const existingUser = await User.findOne({email: req.body.email})

        //Check if existing User
        if(existingUser){
            return res.status(200).send({message:"User already exists", success: false})
        }
        else{
            await user.save() // saving user to DB
            return res.status(200).send({message: "User registered successfully", success: true})
        }
    }catch(error){
        return res.status(500).send({message: error.message, success: false})
    }

})

//User Login
router.post('/login',async (req,res)=>{
    //try-catch

    try{
        //Checking if user already exists or not
        const user = await User.findOne({email: req.body.email})

        if(!user){
            return res
            .status(200)
            .send({message: "User does not exist", success: false})
        }
        const passwordsMatched = await bcrypt.compareSync(
            req.body.password, // Password from login 
            user.password // Password from db
        )
        // If passwords matched
        if(passwordsMatched){
            const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY,{
                expiresIn: "1d"
            })
            return res
            .status(200)
            .send({message: "User logged in successfully", success: true, data: token}) // return the token
        }
        else{
            return res
            .status(200)
            .send({message: "Password is incorrect", success: false})
        }
    }catch(error){
        return res.status(200).send({message: error.message, success: false})
    }
})

//get-user-data
router.post("/get-user-data",authMiddleware, async(req,res)=>{
    try{
        const user = await User.findById(req.body.userId) //userId is set in authMiddleware
        user.password = undefined //unsetting the password so as its not visible in headers
        return res.status(200).send({
            message: "User data fetched successfully",
            success: true,
            data: user
        })
    }catch(error){
        return res.status(500).send({message: error.message, success: false})
    }
    
})
module.exports = router