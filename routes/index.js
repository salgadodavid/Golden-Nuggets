const express = require('express')
const router = express.Router()
const homeController = require("../controllers/index");
const postsController = require("../controllers/posts");
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Main Routes 
router.get("/", homeController.getIndex);
router.get("/feed", ensureAuth, postsController.getFeed);
router.post("/post/createPost", ensureAuth, postsController.createPost);
// router.get("/comment", ensureAuth, commentsController.getComments);


// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;
