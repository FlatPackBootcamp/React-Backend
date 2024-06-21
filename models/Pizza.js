const mongoose = require('mongoose')

const sauceChoices = ['Marinara', 'Barbecue', 'Buffalo', 'Alfredo', 'Pesto']

const pizzaSchema = mongoose.Schema({
    name: {type: String, required: true},
    toppings: [String],
    sauce: {type: String, enum: sauceChoices}, 
    crust: {type: String, required: true},
    image: {type: String, required: true},
    size: { type: Number, required: true, min: 4, max: 30},
    heatRating: {type: Number, required: true, min: 0, max: 3},
    isVegetarian: {type: Boolean, default: false},
    isVegan: {type: Boolean, default: false},
    owner: {type: mongoose.Schema.Types.ObjectId, required: true}
})

const Pizza = mongoose.model('Pizza', pizzaSchema)

module.exports = Pizza