const express = require('express')
const router = express.Router()
const homeController = require("../controllers/index");
const postsController = require("../controllers/posts");
const commentsController = require("../controllers/comments");
const profileController = require("../controllers/profile");
const groupsController = require("../controllers/groups");
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Main Routes 
router.get("/", homeController.getIndex);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/profile/:googleId", ensureAuth, profileController.getProfile);
router.post("/post/createPost", ensureAuth, postsController.createPost);
router.get("/login", homeController.getLogin)
router.get("/createGroup", ensureAuth, groupsController.getCreateGroupForm);
router.post("/createGroup", ensureAuth, groupsController.createGroup);

// router.get("/comment", ensureAuth, commentsController.getComments);


// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;
