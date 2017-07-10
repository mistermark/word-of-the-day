//== includes
var express         = require('express');
var router          = express.Router();

var words           = require('./words');

var siteConfig      = require('../../config/site');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index', siteConfig);
  })


  app.get('*', words.noAccess);

}
