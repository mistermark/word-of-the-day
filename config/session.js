var configLocal         = require('./local');

module.exports = {
    'session': {
        'secret': configLocal.session.secret,
        'cookieAge': configLocal.session.cookieAge,
        'rolling': configLocal.session.rolling,
        'resave': configLocal.session.resave, 
        'saveUninitialized': configLocal.session.saveUninitialized,
    }
}