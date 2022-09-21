const passport = require('passport')

exports.googleAuth = (req, res) => {

    passport.authenticate('google', { scope: ['profile']})

}

exports.googleAuthCallback = (req, res) => {

    passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
    res.redirect('/')
    }
}

exports.logout = (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
            res.redirect('/');
    }); 
}


// router.get('/google/callback', 
// passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
//     res.redirect('/dashboard')
// }
// )

// //@desc Logout User
// //@route /auth/logout
// //!Change: Passport 0.6 requires logout to be async
// router.get('/logout', (req,res) => {
//     req.logout(function(err) {
//         if (err) { return next(err); }
//         res.redirect('/');
//       });
// })


// module.exports = router