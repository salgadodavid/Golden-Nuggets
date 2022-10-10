// //@desc Login/Landing Page
// //@Route GET /
module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getLogin: (req, res) => {
      res.render("login.ejs");
    },
  };

