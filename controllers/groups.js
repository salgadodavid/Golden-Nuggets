const Group = require("../models/Group");
const Post = require("..models/Post")
const User = require("..models/User")

module.exports = {
  getGroupPage: async (req, res) => {
    try {
      const posts = await Post.find({ bookTitle: req.params.bookTitle }).lean();
      const userInfo = await User.find({googleId: req.user.googleId})
      res.render("group.ejs", {posts: posts});
    } catch (err) {
      console.log(err);
    }
  }, 
  joinGroup: async (req, res) => {
    try {
      await Group.updateOne({bookTitle: req.params.bookTitle
      
      });
      console.log("Group has been createdd!");
      res.redirect("/feed");  //redirected to profile
    } catch (err) {
      console.log(err);
    }
  }
  newGroupForm: (req, res) => {
      res.render("newGroup.ejs");
  },
  createGroup: async (req, res) => {
    try {
      console.log(req.body)
      await Group.create({
        groupMod: req.user.googleId,
        bookTitle: req.body.bookTitle.toLowerCase(),
        author: req.body.author,
        description: req.body.description,
      });
      console.log("Group has been createdd!");
      res.redirect("/feed");  //redirected to profile
    } catch (err) {
      console.log(err);
    }
  }
}
