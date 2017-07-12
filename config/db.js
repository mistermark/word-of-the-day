//=== db configuration ===
var localSettings       = require('./local');

module.exports = {
    url: {
        dev: localSettings.db.mongodb.dev,
        prod: localSettings.db.mongodb.prod,
    }
}