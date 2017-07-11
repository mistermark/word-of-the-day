//== includes
<<<<<<< HEAD
var express         = require('express');
var router          = express.Router();

var words           = require('./words');

var siteConfig      = require('../../config/site');
=======
var mongoose        = require('mongoose');

var db              = require('../../config/db');
var auth              = require('../../config/auth');

var words           = require('./words');
var featured        = require('./featured');
var settings        = require('./settings');

var siteConfig      = require('../../config/site');
var utils           = require('../tools/utils');

// Mongo database
// mongoose.Promise = global.Promise;
mongoose.connect(db.url.dev);

mongoose.connection.on('error', function(err) {
  console.log(err.name +': '+ err.message);
});

>>>>>>> develop

module.exports = function(app, passport) {

  app.use(function (req, res, next) {
    res.locals.site = siteConfig;
    res.locals.user = req.user;
    res.locals.login = req.isAuthenticated();
    next();
  });

<<<<<<< HEAD
  app.get('/', function(req, res) {
    res.render('index', siteConfig);
  })
=======
  // Initialize a sample database
  app.post('/api/reset', function(req, res) {
    settings.resetSettings(req, res)
      .then(function() {
        return words.resetWords(req, res);
      })
      .then(function() {
        return words.sampleWordsDb(req, res);
      })
      .then(function() {
        return settings.initSettings(req, res);
      })
      .then(function(response) {
        res.json(response);
      })
      .catch(function(error) {
        res.json(error);
      });
  });

  // Reset app settings
  app.post('/api/settings/reset', settings.resetSettings);

  // Get current settings
  app.get('/api/settings', settings.getConfig);

  // Delete current settings object(s)
  app.put('/api/settings', settings.updateConfig);

  // Get Word of the Day!
  app.get('/api/word', featured.getFeaturedWord);

  // Get all words
  app.get('/api/words', words.getWords);

  // Get single word
  app.get('/api/words/:id', words.findWord);

  // Update single word
  app.put('/api/words/:id', words.updateWord);

  // Delete single word
  app.delete('/api/words/:id', words.removeWord);

  // Delete array of word - [id]
  app.delete('/api/words', words.removeWords);

  // Add single word
  app.post('/api/words', words.addWord);

>>>>>>> develop

  // Authentication
  app.get('/auth/google', 
      passport.authenticate('google', {
        hd: auth.googleAuth.allowedDomain,
        prompt: 'select_account',
        scope : ['profile', 'email']
      }));

  app.get('/auth/google/callback',
      passport.authenticate('google', {
          successRedirect : '/',
          failureRedirect : '/'
      }));

  app.get('/', isLoggedIn, function(req, res) {
    res.render('index');
  });

  app.get('/login', function(req, res) {
    res.render('login');
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {

      // if user is authenticated in the session, carry on
      if (req.isAuthenticated())
          return next();

      // if they aren't redirect them to the login page
      res.redirect('/login');
  }

  app.use(function(req, res) {
    res.status('404');

    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }

    if (req.accepts('json')) {
      res.send({ error: site.notfound.message });
      return;
    }

<<<<<<< HEAD
=======
    res.type('txt').send(site.notfound.message);
  });

>>>>>>> develop
}
