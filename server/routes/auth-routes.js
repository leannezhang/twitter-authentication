const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login')
})

// auth logout
router.get('/logout', (req, res) => {
    res.send('logging out')
})

// auth with twitter
router.get('/twitter', passport.authenticate('twitter'));

// redirect to home page after successfully login via twitter
router.get('/twitter/redirect', 
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;