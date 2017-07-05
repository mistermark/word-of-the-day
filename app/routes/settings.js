//== includes
var WordApi         = require('../models/word');
var SettingsApi     = require('../models/settings');

var utils           = require('../tools/utils');
var sampleDB        = require('../tools/sample');


//== Magic happening

module.exports.resetSettings = function(req, res) {
  console.log("> Resetting Settings");

  if(req.body.reset !== true) {
    res.json({"error": true, "message": "Settings can't be reset"});
  }

  SettingsApi.remove({})
    .then(function(response) {
      // console.log(module.exports.initSettings);
    })
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports.initSettings = function(req, res) {
  console.log("> Initializing app settings");
  return SettingsApi.create({});
}

module.exports.getCurrentConfig = function() {
  return SettingsApi.find({});
}

module.exports.getConfig = function(req, res) {
  console.log("> Getting current settings");

  SettingsApi.find({})
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      res.json(error);
    });
}

module.exports.updateConfig = function(req, res) {
  console.log("> Updating config values");

  var updates = req.body;

  if(Object.keys(updates).length === 0 || updates.constructor !== Object) {
    res.json({"error": true, "message": "Settings can't be updated"});
  }

  SettingsApi.findOneAndUpdate({}, updates, {new: true})
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      res.json(error);
    });
}

// exports.deleteConfig = function(req, res) {
//   console.log("> Deleting current setting(s)");
//
//   SettingsApi.findByIdAndRemove(req.body.id)
//     .then(function(response) {
//       console.log(response);
//       res.json(response);
//     })
//     .catch(function(error) {
//       res.json(error);
//     });
//
// }


// exports.noAccess = function(req, res) {
//   res.json({"status": "error", "message": "You can't access the API from here. RTFM!"});
// }
