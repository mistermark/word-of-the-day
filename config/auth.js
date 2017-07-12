var localSettings       = require('./local');

module.exports = {
    'googleAuth' : {
        'clientID': localSettings.auth.google.clientID,
        'clientSecret': localSettings.auth.google.clientSecret,
        'callbackUrl': localSettings.auth.google.callbackUrl,
        'allowedDomain': localSettings.auth.google.allowedDomain,
    }
}