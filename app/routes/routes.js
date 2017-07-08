//== includes
var mongoose        = require('mongoose');
var express         = require('express');
var router          = express.Router();

var db              = require('../../config/db');

var words           = require('./words');
var featured         = require('./featured');
var settings        = require('./settings');

var siteConfig      = require('../../config/site');
var utils           = require('../tools/utils');

// Mongo database
mongoose.Promise = global.Promise;
mongoose.connect(db.url.dev);

mongoose.connection.on('error', function(err) {
  console.log(err.name +': '+ err.message);
});


module.exports = function(app) {

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

  app.get('/', function(req, res) {
    res.render('index', siteConfig);
  })


  app.get('*', words.noAccess);

  // app.use('/', router);

}
