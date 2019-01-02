const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

// auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// auth with twitter
router.get("/twitter", passport.authenticate("twitter"), (req, res) => {
  res.json({ authenticating: true });
});

// redirect to home page after successfully login via twitter
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter"),
  (req, res) => {
    console.log("login sucessfully");
    res.status(200).json({ user: req.user });
    // Successful authentication, redirect home.
    // res.redirect('/');
    // res.json(req.user);
  }
);

module.exports = router;
