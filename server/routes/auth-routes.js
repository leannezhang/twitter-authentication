const router = require("express").Router();
const passport = require("passport");

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  res.status(200).json({
    success: true,
    message: "user has successfully authenticated",
    user: req.user
  });
});

// when login failed
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// auth with twitter
router.get("/twitter", passport.authenticate("twitter"));

// redirect to home page after successfully login via twitter
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: "/auth/login/success",
    failureRedirect: "/auth/login/failed"
  })
);

module.exports = router;
