//=== defining the model

// grab the mongoose module
var mongoose        = require('mongoose');
var utils           = require('../tools/utils');


var wordSchema = new mongoose.Schema({
    word: String, //word itself
    pronunciation: String, //pronunciation
    definition: String, //meaning of the word
    meta: {
      language: String, //language of the word
      created: { //date of entry creation
        type: String,
        default: utils.currentDate()
      },
      modified: {
        type: String,
        default: utils.currentDate()
      },
      author: String,
      featured: { //nr of featured rounds
        type: Number,
        default: 0
      }
    }
});

//define our word model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Word', wordSchema);
