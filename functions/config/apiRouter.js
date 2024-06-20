const router = require('express').Router()

const validateKey = require('../lib/validateKey')

const admin = require('../controllers/admin')
const pizza = require('../controllers/pizza')

router.route('/pizza/:id')
    .get(pizza.pizzaDetail)
    .patch(validateKey.mustBeStudent, pizza.editPizza)
    .delete(validateKey.mustBeStudent, pizza.deletePizza)

router.route('/pizza')
    .get(pizza.pizzaIndex)
    .post(validateKey.mustBeStudent, pizza.addPizza)

router.route('/admin/student')
    .post(validateKey.isAdmin, admin.addStudent)

router.route('/admin/refresh')
    .delete(validateKey.isAdmin, admin.refreshDB)

module.exports = router