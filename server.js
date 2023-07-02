require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const pizzaRoutes = require('./routes/pizza')
const authRoutes = require('./routes/user')

const app = express()

const PORT = 4000

app.use(bodyParser.json())

app.use(express.urlencoded({
    extended: true
}))

app.use('/api', pizzaRoutes)
app.use('/api', authRoutes)

app.listen(PORT, () => {
    console.log(`The app is open on port ${PORT}`)
})

mongoose.connect(process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occurred', err)
})
