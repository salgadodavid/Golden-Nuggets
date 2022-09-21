const express = require('express')
const router = express.Router()
const authController = require("../controllers/auth");
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get("/google", authController.googleAuth);
router.get("/google/callback", authController.googleAuthCallback);
router.get("/logout", authController.logout);

module.exports = router;
