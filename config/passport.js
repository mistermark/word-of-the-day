// load all the things we need
var GoogleStrategy      = require('passport-google-oauth').OAuth2Strategy;
var configAuth          = require('./auth');

// load up the user model
var User                = require('../app/models/user');


// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.

module.exports = function(passport) {

    // serialize and deserialize
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
    
    passport.use(new GoogleStrategy({
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackUrl,
    },
        function (token, refreshToken, profile, done) {
            // make the code asynchronous
            // User.findOne won't fire until we have all our data back from Google
            process.nextTick(function() {

                if (profile._json.domain !== configAuth.googleAuth.allowedDomain) {
                    done(new Error("Wrong domain!"));
                } else {
                    // try to find the user based on their google id
                    User.findOne({
                        'google.id' : profile.id
                    }, function(err, user) {
                        if (err)
                            return done(err);

                        if (user) {
                            // if a user is found, log them in
                            return done(null, user);
                        } else {
                            // if the user isnt in our database, create a new user
                            var newUser          = new User();

                            // set all of the relevant information
                            newUser.google.id    = profile.id;
                            newUser.google.token = token;
                            newUser.google.name  = profile.displayName;
                            newUser.google.email = profile.emails[0].value; // pull the first email

                            // save the user
                            newUser.save(function(err) {
                                if (err)
                                    throw err;
                                return done(null, newUser);
                            });
                        }
                    });
                }
            });
        }
    ));
}