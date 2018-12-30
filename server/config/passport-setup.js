const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new TwitterStrategy({
        // options for the twitter start
        consumerKey: keys.TWITTER_CONSUMER_KEY,
        consumerSecret: keys.TWITTER_CONSUMER_SECRET,
        callbackURL: '/auth/twitter/redirect'
    }, async (token, tokenSecret, profile, done) => {
        // find current user in UserModel
        currentUser = await User.findOne({
            twitterId: profile._json.id_str
        });
        // create new user if the database doesn't have this user
        if (!currentUser) {
            newUser = await new User({
                name: profile._json.name,
                screenName: profile._json.screen_name,
                twitterId: profile._json.id_str,
                profileImageUrl: profile._json.profile_image_url,
            }).save();
            if (newUser) {
                console.log('new user created', newUser)
            }
        } else {
            console.log('user already exists');
        }       
        console.log('done')
    })
)

