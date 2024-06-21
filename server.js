require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const apiRouter = require('./config/apiRouter')

const app = express()

const PORT = 3000

app.use(bodyParser.json())

app.use(express.urlencoded({
    extended: true
}))

app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`Pizzeria app listening on port: ${PORT}`)
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
