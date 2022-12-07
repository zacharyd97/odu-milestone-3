const router = require('express').Router()
const db = require("../models")

const { } = db

// post 
router.post('/', async (req, res) => {
    console.log('post')
})

// get
router.get('/', async (req, res) => {
    console.log('get')
})

// show
router.get('/:id', async (req, res) => {
    console.log('show')
})

// put
router.put('/:id', async (req, res) => {
    console.log('put')
})

// delete
router.delete('/:id', async (req, res) => {
    console.log('deleted')
})

// post comments
router.post('/:id/comments', async (req, res) => {
    console.log('comment posted')
})

// delete comments
router.delete('/:id/comments/:commentId', async (req, res) => {
    console.log('comment deleted')
})

module.exports = router