const router = require('express').Router()
const db = require("../models")

const { Genre, User, Post } = db

// post new genre (admin only)
router.post('/', async (req, res) => {
    if (req.currentUser?.role !== 'admin') {
        return res.status(403).json({ message: `You are not allowed to add a genre` })
    }
    if (!req.body.name) {
        req.body.name = 'New Genre'
    }
    if (!req.body.description) {
        req.body.description = ''
    }
    const genres = await Genre.create(req.body)
    res.json(genres)
})

// get genres
router.get('/', async (req, res) => {
    const genres = await Genre.findAll()
    res.json(genres)
})

// show genre
router.get('/:genre_id', async (req, res) => {
    let genreId = Number(req.params.genre_id)
    if (isNaN(genreId)) {
        res.status(404).json({ message: `Invalid id "${genreId}"` })
    }
    else {
        const genre = await Genre.findOne({
            where: { genre_id: genreId },
            include: {
                association: 'posts',
                include: 'user'
            }
        })
        if (!genre) {
            res.status(404).json({ message: `Could not find genre with id "${genreId}"` })
        }
        else {
            res.json(genre)
        }
    }
})

// edit genre (admin only)
router.put('/:genre_id', async (req, res) => {
    if (req.currentUser?.role !== 'admin') {
        return res.status(403).json({ message: `You are not allowed to edit genres` })
    }
    else {
        let genreId = Number(req.params.genre_id)
        if (isNaN(genreId)) {
            res.status(404).json({ message: `Invalid id "${genreId}"` })
        }
        else {
            const genre = await Genre.findOne({
                where: { genre_id: genreId }
            })
            if (!genre) {
                res.status(404).json({ message: `Could not find genre with id "${genreId}"` })
            }
            else {
                Object.assign(genre, req.body)
                await genre.save()
                res.json(genre)
            }
        }
    }
})

// delete genre (admin only)
router.delete('/genre_id', async (req, res) => {
    if (req.currentUser?.role !== 'admin') {
        return res.status(403).json({ message: `You are not allowed to delete genres` })
    }
    else {
        let genreId = Number(req.params.genre_id)
        if (isNaN(genreId)) {
            res.status(404).json({ message: `Invalid id "${genreId}"` })
        }
        else {
            const genre = await Genre.findOne({
                where: { genre_id: genreId }
            })
            if (!genre) {
                res.status(404).json({ message: `Could not find genre with id "${genreId}"` })
            }
            else {
                await genre.destroy()
                res.json(genre)
            }
        }
    }
})

// post posts
router.post('/:genre_id/posts', async (req, res) => {
    let genreId = Number(req.params.genre_id)
    const genre = await Genre.findOne({
        where: { genre_id: genreId }
    })
    if (!genre) {
        res.status(404).json({ message: `Could not find genre with id "${genreId}"` })
    }
    if (!req.currentUser) {
        return res.status(404).json({ message: `You must be logged in to create a post.` })
    }

    let post = await Post.create({
        ...req.body,
        user_id: req.currentUser.user_id,
        genre_id: genreId
    })

    res.send({
        ...post.tojson(),
        user: req.currentUser
    })
})

// delete posts (User's own posts or admin)
router.delete('/:genre_id/posts/:post_id', async (req, res) => {
    let genreId = Number(req.params.genre_id)
    let postId = Number(req.params.post_id)
    if (isNaN(genreId)) {
        res.status(404).json({ message: `Invalid id "${genreId}"` })
    }
    else if (isNaN(postId)) {
        res.status(404).json({ message: `Invalid id "${commentId}"` })
    }
    else {
        const post = await Post.findOne({
            where: {
                post_id: postId,
                genre_id: genreId
            }
        })
        if (!post) {
            res.status(404).json({ message: `Could not find post with id "${postId} in genre with id "${genreId}"` })
        }
        else if (post.user_id !== req.currentUser?.user_id || req.currentUser?.role !== 'admin') {
            res.status(403).json({ message: `You do not have permission to delete post "${post.post_id}"` })
        }
        else {
            await post.destroy()
            res.json(post)
        }
    }
})

module.exports = router
