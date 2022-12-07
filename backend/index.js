const express = require('express')
const { Sequelize } = require('sequelize')
const cors = require('cors')
const app = express()

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) =>{
    res.send('hello world')
})

app.listen(process.env.PORT, () => {
    console.log(`live on port:${process.env.PORT}`)
})