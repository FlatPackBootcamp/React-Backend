const Student = require('../models/Student')
const Pizza = require('../models/Pizza')

const pizzaSeed = require('../lib/pizzaSeed')

const addStudent = async (req, res) => {
    try {
        const data = {
            emailAddress: req.body.email,
            name: req.body.name
        }

        const student = await new Student(data)
        await student.save()

        const responseData = {
            studentName: student.name,
            studentEmail: student.emailAddress,
            studentKey: student._id
        }

        res.status(201).json({
            message: 'Student has been created',
            ...responseData
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }

    

}

const refreshDB = async (req, res) => {
    try {
        await Pizza.collection.drop()
        const admin = await Student.findOne({ name: 'admin' })

        let pizzasToSeed = pizzaSeed.pizzas

        pizzasToSeed = pizzasToSeed.map(pizza => {
            pizza.owner = admin.id
            return { ...pizza }
        })

        const pizzas = await Pizza.insertMany(pizzasToSeed)

        res.status(201).json({ message: `Seeded ${pizzas.length} pizzas in the DB` })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }

}

module.exports = {
    addStudent,
    refreshDB
}