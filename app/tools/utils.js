//== includes
var WordApi         = require('../models/word');

var settings        = require('../routes/settings');
var words           = require('../routes/words');


/**
 * Little helpers
 */
exports.kebabCase = function(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

exports.currentDate = function() {
  return (new Date).toISOString();
}


/**
 * Settings related helpers
 */

exports.updateWordFeaturedRound = function(featuredWord) {

  var query = { "word": featuredWord.word };
  var update = { $set: { "meta.featured": featuredWord.meta.featured + 1 } };
  var options = {new: true};

  // console.log({ "meta.featured": featuredWord.meta.featured + 1 });

  // return WordApi.findOneAndUpdate(query, update, options);
  // return "value";
}

/**
 * Update global setting "round" and continue
 */
exports.updateSettingFeaturedRound = function() {
  console.log('Updating "round" global setting');
}

/**
 * Saves current number of round for Featured
 */
exports.updateRound = function(req, res) {
    console.log("Update current round");

    var settings = req.body;

    console.log(req.body);

    var newSettings = {
        round: settings.round
    };

    // settings.updateConfig(newSettings);

    // SettingsApi.put(initQuery)
    //     .then(function(response) {
    //         res.json(response);
    //     })
    //     .catch(function(error) {
    //         res.json(error);
    //     })
}

// exports.resetSettings = function(req, res) {
//   settings.resetSettings(req, res)
//     .then(function() {
//       return settings.initSettings(req, res);
//     })
//     .then(function(response) {
//       res.json(response);
//     })
//     .catch(function(error) {
//       res.json(error);
//     });
// }
