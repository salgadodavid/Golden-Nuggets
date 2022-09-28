const Comment = require("../models/Comment");

module.exports = {
    getComments: async (req, res) => {
        try {
          const comments = await Comment.find().sort({ createdAt: "desc" }).lean();  // , { posts: posts }
          res.render("feed.ejs");  
        } catch (err) {
          console.log(err);
        }
      },
}