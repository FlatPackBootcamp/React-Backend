const express = require('express')
const router = express.Router()
const pizzaCtrl = require('../controllers/pizza')
const protectedRoute = require('../lib/isLoggedIn')

router.get('/pizza/index', pizzaCtrl.pizzaIndex)

router.post('/pizza/add', protectedRoute, pizzaCtrl.addPizza)

router.get('/pizza/:id', pizzaCtrl.pizzaDetail)

router.delete('/pizza/:id', protectedRoute, pizzaCtrl.deletePizza)

router.put('/pizza/:id', protectedRoute, pizzaCtrl.editPizza)

router.post('/seed-db', pizzaCtrl.seedDatabase)

module.exports = router
