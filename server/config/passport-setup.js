const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys');

passport.use(
    new TwitterStrategy({
        // options for the twitter start
        consumerKey: keys.TWITTER_CONSUMER_KEY,
        consumerSecret: keys.TWITTER_CONSUMER_SECRET,
        callbackURL: '/auth/twitter/redirect'
    }, (token, tokenSecret, profile, cb) => {
        // passport callback function
        console.log('profile', profile);
        console.log('cb', cb)
    })
)

