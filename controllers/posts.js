const Post = require("../models/Post");

module.exports = {
    getFeed: async (req, res) => {
        try {
        //   const posts = await Post.find().sort({ createdAt: "desc" }).lean();  // , { posts: posts }
          res.render("feed.ejs");  
        } catch (err) {
          console.log(err);
        }
      },
}