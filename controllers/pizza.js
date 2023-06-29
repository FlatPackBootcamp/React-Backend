const bcrypt = require('bcrypt')

const Pizza = require('../models/Pizza')
const User = require('../models/User')
const seed = require('../lib/pizzaSeed')

const pizzaIndex = async (req, res) => {
    try {
        const pizzas = await Pizza.find({}, '_id name image')

        if (pizzas.length){
            res.status(200).json(pizzas)
        } else {
            res.sendStatus(204)
        }
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const pizzaDetail = async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id)
        res.status(200).json(pizza)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const addPizza = async (req, res) => {
    try {
        console.log('in add pizza', req.body)
        const pizza = new Pizza(req.body)
        await pizza.save()

        res.status(201).json(pizza)

    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const editPizza = async (req, res) => {
    try {
        const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(pizza)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const deletePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findByIdAndDelete(req.params.id)
        res.status(200).json({message: `${pizza._id} has been deleted`})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const seedDatabase = async (req, res) => {
    try {
        const key = process.env.INSTRUCTOR_KEY

        if (req.query.instructorkey === key){
            await Pizza.collection.drop()
            await User.collection.drop()

            const userData = {
                firstName: 'admin',
                lastName: 'admin',
                emailAddress: 'admin@email.com',
                password: bcrypt.hashSync('admin', 10)
            }

            const newUser = new User(userData)
            await newUser.save()

            let counter = 0
            for (let i = 0; i < seed.pizzas.length; i++){
                seed.pizzas[i].user = newUser._id
                const pizza = new Pizza(seed.pizzas[i])
                await pizza.save()
                counter++
            }

            res.status(200).json({
                message: `Created ${counter} Pizzas, Happy Hacking`,
                userCreated: newUser
            })
        }

    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    pizzaIndex,
    pizzaDetail,
    addPizza,
    editPizza,
    deletePizza,
    seedDatabase
}