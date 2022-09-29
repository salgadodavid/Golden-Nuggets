const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
      getPosts: async (req, res) => {
        try {
        const posts = await Post.find().sort({ createdAt: "desc" }).lean();  // , { posts: posts }
          res.render("feed.ejs");  
        } catch (err) {
          console.log(err);
        }
      },
      createPost: async (req, res) => {
        try {
          console.log(req.body)
          await Post.create({
            googleId: req.user.googleId,
            nugget: req.body.newPost,
            likes: 0,
            user: req.user.id,
          });
          console.log("Post has been added!");
          res.redirect("/feed");  //redirected to profile
        } catch (err) {
          console.log(err);
        }
      },
      getFeed: async (req, res) => {
        try {
          const posts = await Post.find().sort({ createdAt: "desc" }).lean();
          const userInfo = await User.find({googleId: req.user.googleId})
          res.render("feed.ejs", {posts: posts});
        } catch (err) {
          console.log(err);
        }
      },      
}