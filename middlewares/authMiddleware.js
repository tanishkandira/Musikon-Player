const jwt = require("jsonwebtoken")

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1] //check the token in auth header
        const decoded = jwt.verify(token, process.env.SECRET_KEY) //decode the token which is userid
        req.body.userId = decoded.userId
        next()
    }
    catch(error){
        // console.log(error)
        return res.status(500).send({message: error.message, success: false})
    }
}
