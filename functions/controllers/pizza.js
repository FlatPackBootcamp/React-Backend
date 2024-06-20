const Pizza = require('../models/Pizza')
const User = require('../models/Student')

const pizzaIndex = async (req, res) => {
    try {
        const admin = await User.find({ name: 'admin' }).exec()
        const student = await User.findById(req.query.student_key)

        const pizzas = await Pizza
            .find({}, '_id name image heatRating')
            .where('owner')
            .in([student._id, admin[0]._id])
            .exec()

        if (pizzas.length) {
            res.status(200).json(pizzas)
        } else {
            res.sendStatus(204)
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }
}

const pizzaDetail = async (req, res) => {
    try {

        const pizza = await Pizza.findById(req.params.id)

        pizza.owner = undefined

        res.status(200).json(pizza)
    } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }
}

const addPizza = async (req, res) => {
    try {
        if (!req.query.student_key) {
            res.status(403).json({ error: 'Student Key Not Provided' })
        }

        console.log('in add pizza', req.body)
        const data = {
            name: req.body.name,
            toppings: req.body.toppings,
            sauce: req.body.sauce,
            crust: req.body.crust,
            image: req.body.image,
            size: req.body.size,
            heatRating: req.body.heatRating,
            isVegetarian: req.body.isVegetarian,
            isVegan: req.body.isVegan,
            owner: req.query.student_key
        }
        console.log(data)
        const pizza = new Pizza(data)
        await pizza.save()

        res.status(201).json(pizza)

    } catch (err) {
        res.status(500).json(err)
    }
}

const editPizza = async (req, res) => {
    try {
        const pizza = await Pizza.findOneAndUpdate({owner: req.query.student_key, _id: req.params.id}, req.body, { new: true })
        res.status(200).json(pizza)
    } catch (err) {
        res.status(500).json(err)
    }
}

const deletePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findOneAndDelete({owner: req.query.student_key, _id: req.params.id})
        res.status(200).json({ message: `${pizza._id} has been deleted` })
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    pizzaIndex,
    pizzaDetail,
    addPizza,
    editPizza,
    deletePizza
}