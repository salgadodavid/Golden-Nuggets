const Group = require("../models/Group");

module.exports = {
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
