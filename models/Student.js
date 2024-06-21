const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, 'Name must be 2 or more characters'],
        maxlength: [60, 'Name cannot be more than 60 characters']
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
},{
    timestamps: true
})

const User = mongoose.model('Student', studentSchema)

module.exports = User
