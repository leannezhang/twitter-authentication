const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");
const User = require("../models/user-model");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  // parameters: error, user
  done(new Error("Failed to serialize an user"), user.id);
});

// // deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(new Error("Failed to deserialize an user"), user);
  });
});

passport.use(
  new TwitterStrategy(
    {
      // options for the twitter start
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/redirect"
    },
    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel
      const currentUser = await User.findOne({
        twitterId: profile._json.id_str
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          screenName: profile._json.screen_name,
          twitterId: profile._json.id_str,
          profileImageUrl: profile._json.profile_image_url
        }).save();
        if (newUser) {
          done(new Error("Failed to create a new user"), newUser);
        }
      }
      done(new Error("Failed to find current user"), currentUser);
    }
  )
);
