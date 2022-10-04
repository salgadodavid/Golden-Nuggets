const Post = require("../models/Post");

module.exports = {
  getProfile: async (req, res) => {
    try {
      console.log(req.user)
      const posts = await Post.find({ googleId: req.user.googleId });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  }
}

