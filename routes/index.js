const express = require('express')
const router = express.Router()
const homeController = require("../controllers/index");
// const postsController = require("../controllers/posts");
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Main Routes 
router.get("/", homeController.getIndex);


// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;
