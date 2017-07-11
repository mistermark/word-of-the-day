//== includes
var mongoose        = require('mongoose');
var utils           = require('../tools/utils');

var settingsSchema = new mongoose.Schema({
    round: {
      type: Number,
      default: 0
    },
    featured: {
      word: String,
      date: {
        type: String,
        default: 0
      }
    }
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Settings', settingsSchema);
