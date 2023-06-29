const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require('../models/User')

const signup = async (req, res) => {
    try {
        console.log(req.body)
        const user = new User(req.body)

        const hash = bcrypt.hashSync(req.body.password, 10)
        console.log(hash)

        user.password = hash

        await user.save()

        res.status(201).json({message: "User created successfully!"})
    } catch (error) {

        res.status(500).json({message: error.message})
    }
}

const signin = async (req, res) => {
    let { emailAddress, password } = req.body

    // Search for user with emailAddress
    try{
        let user = await User.findOne({ emailAddress })
        console.log(user)

        if(!user){
            return res.json({message: "User not found!"}).status(404)
        }

        // Password Comparison
        const isMatch = await bcrypt.compareSync(password, user.password)
        console.log(password) // Plain Text Password
        console.log(user.password) // Hashed Password

        if(!isMatch){
            return res.json({message: "Password not matched!!"}).status(400)
        }

        // Generate JWT
        const payload = {
            user: {
                id: user._id
            }
        }

        jwt.sign(
            payload,
            "SUPERSECRET",
            { expiresIn: 36000000 },
            (err, token) => {
                if (err) throw err
                res.json({ token }).status(200)
            }
        )
    } catch(error){
        console.log(error)
        res.json({error: error.message}).status(400)
    }

}

module.exports = {
    signup,
    signin
}