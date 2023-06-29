const jwt = require("jsonwebtoken")
const User = require('../models/User')

module.exports = async (req, res, next) => {
    const key = process.env.API_KEY
    const authToken = req.header("Authorization")
    let token = ""

    if (authToken === key){
        const adminUser = await User.findOne({emailAddress: 'admin@email.com'})
        console.log('using token', adminUser)
        req.body.user = adminUser._id
        console.log('req.body', req.body)
        next()
        return
    }
    
    
    console.log(authToken)

    if(authToken){
        authToken = authToken.replace("Bearer ", "")
        console.log(authToken)
        token = authToken
    }

    if(!authToken){
        return res.status(401).json({message: "Unauthorised"})
    }

    try{
        const decoded = jwt.verify(token, "SUPERSECRET")
        req.user = decoded.user
        next()
    } catch(error) {
        return res.status(401).json({message: "Your token is invalid"})
    }
}