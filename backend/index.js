require("dotenv").config();
const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()
const cookieSession = require('cookie-session')

require('dotenv').config()
app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000 // 1 day
}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/user', require('./controllers/userController'))
app.use("/auth", require('./controllers/authentication'))
app.use('/genres', require('./controllers/genreController'))
app.use('/posts', require('./controllers/postController'))

app.listen(process.env.PORT, () => {
    console.log(`live on port:${process.env.PORT}`)
})