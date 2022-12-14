const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt') 
const user = require('../models/user')

const { User } = db

router.get('/', async (req, res) => {
    res.send('user endpoint')
})

router.post('/register', async (req, res) => {
    
    try{
        let {user_password, ...rest} = req.body;
        console.log(req.body)
        console.log({user_password, ...rest})
        const newUser = await User.create({
            ...rest,
            user_password: await bcrypt.hash(user_password,10)

        
        })
        // console.log(newUser)
        res.json(newUser)
    } catch (err){
        res.status(500).json(err)
    }
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router