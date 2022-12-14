const express = require('express')
const router = express.Router()
const groupsController = require("../controllers/groups");
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get("/:bookTitle", ensureAuth, groupsController.getGroupPage);
router.put("/joinGroup", ensureAuth, groupsController.joinGroup);
router.post("/createPost", ensureAuth, groupsController.createPost);
router.get("/createGroup", ensureAuth, groupsController.newGroupForm);
router.post("/createGroup", ensureAuth, groupsController.createGroup);

module.exports = router; 