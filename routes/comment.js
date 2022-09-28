const express = require('express')
const router = express.Router()
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// const homeController = require("../controllers/index");
// const postsController = require("../controllers/posts");


//Main Routes 
// router.get("/", homeController.getIndex);
// router.get("/feed", ensureAuth, postsController.getPosts);
router.post("/createComment", ensureAuth, commentsController.createComment);
// router.get("/comment", ensureAuth, commentsController.getComments);


// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;
