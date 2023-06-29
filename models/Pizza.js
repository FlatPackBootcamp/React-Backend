const mongoose = require('mongoose')

const pizzaSchema = mongoose.Schema({
    name: {type: String, required: true},
    toppings: [String],
    base: {type: String},
    image: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Pizza = mongoose.model('Pizza', pizzaSchema)

module.exports = Pizza