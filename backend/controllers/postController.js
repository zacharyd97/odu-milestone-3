const router = require('express').Router()
const db = require("../models")

const { Post, Comment } = db

router.get('/', async (req, res) => {
    const posts = await Post.findAll()
    res.json(posts)
})

router.post('/', async (req, res) => {
    const post = await Post.create(req.body)
    res.json(post)
})

router.get('/:postId', async (req, res) => {
    let postId = Number(req.params.postId)
    if (isNaN(postId)) {
        res.status(404).json({ message: `Invalid id "${postId}"` })
    } else {
        const post = await Post.findOne({
            where: { post_id: postId },
            include: { model: Comment, as: "comment" }
        })
        if (!post) {
            res.status(404).json({ message: `Could not find place with id "${postId}"` })
        } else {
            res.json(post)
        }
    }
})

router.put('/:postId', async (req, res) => {
    let postId = Number(req.params.postId)
    if (isNaN(postId)) {
        res.status(404).json({ message: `Invalid id "${postId}"` })
    } else {
        const post = await Post.findOne({
            where: { post_id: postId },
        })
        if (!post) {
            res.status(404).json({ message: `Could not find place with id "${postId}"` })
        } else {
            Object.assign(post, req.body)
            await post.save()
            res.json(post)
        }
    }
})

router.delete('/:postId', async (req, res) => {
    let postId = Number(req.params.postId)
    if (isNaN(postId)) {
        res.status(404).json({ message: `Invalid id "${postId}"` })
    } else {
        const post = await Post.findOne({
            where: {
                post_id: postId
            }
        })
        if (!post) {
            res.status(404).json({ message: `Could not find place with id "${postId}"` })
        } else {
            await post.destroy()
            res.json(post)
        }
    }
})

router.post('/:postId/comments', async (req, res) => {
    const postId = Number(req.params.postId)

    const post = await Post.findOne({
        where: { post_id: postId }
    })

    if (!post) {
        res.status(404).json({ message: `Could not find place with id "${postId}"` })
    }

    const comment = await Comment.create({
        ...req.body,
        postId: postId
    })

    res.json(comment)
})

router.delete('/:postId/comments/:commentId', async (req, res) => {
    let postId = Number(req.params.postId)
    let commentId = Number(req.params.commentId)

    if (isNaN(postId)) {
        res.status(404).json({ message: `Invalid id "${postId}"` })
    } else if (isNaN(commentId)) {
        res.status(404).json({ message: `Invalid id "${commentId}"` })
    } else {
        const comment = await Comment.findOne({
            where: { comment_id: commentId, post_id: postId }
        })
        if (!comment) {
            res.status(404).json({ message: `Could not find comment with id "${commentId}" for post with id "${postId}"` })
        } else {
            await comment.destroy()
            res.json(comment)
        }
    }
})

module.exports = router