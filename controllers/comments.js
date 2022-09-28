const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      console.log(req.body)
      await Comment.create({
        googleId: req.user.googleId,
        text: req.body.comment,
        likes: 0,
        user: req.user.id,
      });
      console.log("Comment has been added!");
      res.redirect("/feed");  //redirected to profile
    } catch (err) {
      console.log(err);
    }
  }
}

// ,
//     getComments: async (req, res) => {
//         try {
//           const comments = await Comment.find().sort({ createdAt: "desc" }).lean();  // , { posts: posts }
//           res.render("feed.ejs");  
//         } catch (err) {
//           console.log(err);
//         }
//       },