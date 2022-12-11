const router = require('express').Router()
const db = require("../models")

const { Genre, Post, User } = db

// post 
router.post('/', async (req, res) => {
    const genre = await Genre.create(req.body)
    res.json(genre)
})

// get
router.get('/', async (req, res) => {
    const genres = await Genre.findAll()
    res.json(genres)
})

// show
router.get('/:genreId', async (req, res) => {
    let genreId = Number(req.params.genreId)
    if (isNaN(genreId)) {
        res.status(404).json({ message: `Invalid id "${genreId}"` })
    } else {
        const genre = await Genre.findOne({
            where: { genre_id: genreId },
            include: {
                model: Post, as: "posts"
            }
        })
        if (!genre) {
            res.status(404).json({ message: `Could not find genre with id "${genreId}"` })
        } else {
            res.json(genre)
        }
    }
})

// put
router.put('/:id', async (req, res) => {
    console.log('put')
})

// delete
router.delete('/:id', async (req, res) => {
    console.log('deleted')
})

// post posts
router.post('/:genreId/posts', async (req, res) => {
    const genreId = Number(req.params.genreId)

    const genre = await Genre.findOne({
        where: { genre_id: genreId }
    })

    if (!genre) {
        res.status(404).json({ message: `Could not find genre with id "${genreId}"` })

    }
})

// delete comments
router.delete('/:id/comments/:commentId', async (req, res) => {
    console.log('comment deleted')
})

module.exports = router