require("dotenv").config();
const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/user', require('./controllers/userController'))

app.listen(process.env.PORT, () => {
    console.log(`live on port:${process.env.PORT}`)
})