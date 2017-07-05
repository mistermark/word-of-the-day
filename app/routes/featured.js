//== includes
var WordApi         = require('../models/word');

var settings        = require('./settings');

var utils           = require('../tools/utils');

//== Magic happening

exports.getFeaturedWord = function(req, res) {
  console.log("> Getting featured word");

  var featureQuery = {
    "meta.featured": 0
  };

  // if(featured.word !== "") {
  //   res.json(featured);
  //   res.end();
  // }

  WordApi.find(featureQuery)
    .then(function(response) {
      // var l = response.length;
      // featuredWord = response[Math.floor(Math.random() * l)];
      res.json(response);
    })
    .catch(function(error) {
      res.json(error);
    })
}

  // var fetchWord = function(response) {
  //   var roundNr = response[0].round;
  // }

  // WordApi.find({})
  //   .then(function(response) {
  //     // var l = response.length;
  //     console.log(response);
  //
  //     // if(l === 0)
  //     //   utils.updateSettingFeaturedRound(); //update global setting "round" and continue
  //
  //     //
  //
  //
  //     // utils.updateWordFeaturedRound(featuredWord)
  //     //   .then(function(updatedWord) {
  //     //     console.log(updatedWord);
  //     //     res.json(updatedWord);
  //     //   })
  //     //   .catch(function(err) {
  //     //     console.log(err);
  //     //   });
  //
  //   })
  //   .catch(function(error) {
  //     res.json(error);
  //   });

  // utils.getCurrentConfig(config)
  //   .then(function() {
  //     return fetchFeaturedWord(config);
  //   })
  //   .then(function() {
  //
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
