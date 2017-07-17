//== includes

var WordApi         = require('../models/word');

var utils           = require('../tools/utils');
var sampleDB        = require('../tools/sample');

var settings        = require('./settings');


//== Magic happening

// exports.updateRound = function(req, res) {
//   console.log("Initialize app settings");
//
//   var settings = req.body;
//
//   console.log(req.body);
//
//   var initQuery = {
//     round: settings.round
//   };
//
//   // res.json(settings.round);
//
//   SettingsApi.create(initQuery)
//     .then(function(response) {
//       res.json(response);
//     })
//     .catch(function(error) {
//       res.json(error);
//     })
// }

exports.getWords = function(req, res) {
  console.log('Retrieving full list of words');

  WordApi.find({})
    .limit(parseInt(req.query.limit))
    .sort({ 'meta.created': -1 })
    .then(function(response, err) {
      if(err) response = {"status": "success", "message": "Error fetching data"};

      if(response.length === 0)
        response = {"status": "success", "message": "Nothing to fetch"};
      
      res.json(response);
    })
    .catch(function(err) {
      res.json(err);
    });
}

exports.findWord = function(req, res) {
  console.log('Searching for: ', req.params.id);

  var keyWord = req.params.id;
  var query = {
    'word': {
      $regex: new RegExp(keyWord, 'i')
    }
  };

  WordApi.find(query)
    .then(function(response, err) {
      if(response.length <= 0) {
        response = {"status": "success", "message": "Entry not found"};
      }
      res.json(response);
    })
    .catch(function(err) {
      res.json(err);
    });
}

exports.updateWord = function(req, res) {
  var keyWord = req.params.id;
  var updateWord = req.body.word;
  console.log('Updating word: ', keyWord);

  if(keyWord !== updateWord) {
    res.json({"status": "error", "message": "Requested update doesn't match"});
    return;
  }

  var query = {"word": keyWord};
  var update = {$set: req.body};
  var options = {new: true};

  WordApi.findOneAndUpdate(query, update, options)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      res.json(err);
    });

}

exports.removeWord = function(req, res) {
  var keyWord = req.params.id;

  console.log('Removing word:', keyWord);

  WordApi.findByIdAndRemove(keyWord)
    .then(function(response) {
      if(response.length <= 0) {
        response = {"status": "error", "message": "Entry not found"};
      }
      res.json({"status": "success", "message": "Successfully removed \'" + response.word + "\'"});
    })
    .catch(function(err) {
      res.json(err);
    });
}

exports.removeWords = function(req, res) {
  var wordIds = req.body; // Example: ["123","4456","5767"]

  console.log('Removing words:', wordIds);

  WordApi.remove({ "_id": { $in: wordIds } })
    .then(function(response) {
      res.json({"status": "success", "message": "Successfully removed words"});
    })
    .catch(function(err) {
      res.json(err);
    });

}

exports.addWord = function(req, res) {
  var api = new WordApi();
  var word = req.body;

  console.log('Adding word:', word.word);

  if(!word || typeof word.word != "string") {
    res.json({"status": "error", "message": "Invalid input format"});
  }

  WordApi.find({"word": word.word})
    .then(function(response) {
      if(response.length > 0) {
        res.json({"status": "error", "message": "Word already exists"});
        res.end();
      }
    })
    .then(function(response) {

      api.word = word.word;
      api.pronunciation = word.pronunciation;
      api.definition = word.definition;
      api.meta.language = word.meta.language;
      api.meta.author = word.meta.author;

      res.json({"status": "success", "message": "Successfully added new input", "object": word});
      api.save();
    })
    .catch(function(err) {
      res.json(err);
    });

}

exports.sampleWordsDb = function(req, res) {
  console.log("> Sample words...");

  if(req.body.sample === true) {

    var wordArray = [];
    for (var i = 0; i < sampleDB.length; i++) {
      console.log("> Adding samples:", sampleDB[i].word);

      var api = new WordApi();

      api.word = sampleDB[i].word;
      api.pronunciation = sampleDB[i].pronunciation;
      api.definition = sampleDB[i].definition;
      api.meta.language = sampleDB[i].meta.language;
      api.meta.author = sampleDB[i].meta.author;

      wordArray[i] = api;
    }

    return WordApi.create(wordArray);

  }
}

exports.resetWords = function(req, res) {
  console.log('> Resetting Words database');

  return WordApi.remove({});
}

exports.noAccess = function(req, res) {
  res.json({"status": "error", "message": "You can't access the API from here. RTFM!"});
}
