const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Post = require('../models/Post')

//@desc Login/Landing Page
//@Route GET /
router.get('/', ensureGuest, (req,res) => {
    res.render('login',
    {layout: 'login' }
    )
})

//@desc Dashboard
//@Route GET /dashboard
router.get('/posts', ensureAuth, async (req,res) => {
    try {
        const posts = await Post.find({user: req.user.id}).lean()
        console.log(req.user.id)
        console.log(stories)
        res.render('dashboard', {
            name: req.user.firstName,
            stories,
        })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router