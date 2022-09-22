// const passport = require('passport')

// exports.googleAuth = (req, res) => {
//     try {
//         passport.authenticate('google', { scope: ['profile']})
//     } catch (err) {
//         console.log(err);
//     }
// }

// exports.googleAuthCallback = (req, res) => {
//     try {
//         passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
//             res.redirect('/')
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

// exports.logout = (req, res) => {
//     try {
//         req.logout(function(err) {
//             if (err) { return next(err); }
//                 res.redirect('/');
//         });
//     }catch (err) {
//         console.log(err);
//     }
     
// }


// // router.get('/google/callback', 
// // passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
// //     res.redirect('/dashboard')
// // }
// // )

// // //@desc Logout User
// // //@route /auth/logout
// // //!Change: Passport 0.6 requires logout to be async
// // router.get('/logout', (req,res) => {
// //     req.logout(function(err) {
// //         if (err) { return next(err); }
// //         res.redirect('/');
// //       });
// // })


// // module.exports = router