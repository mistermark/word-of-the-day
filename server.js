var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var path            = require('path');
var hbs             = require('hbs');

var passport        = require('passport');
var session         = require('express-session');
var morgan          = require('morgan');
var cookieParser    = require('cookie-parser');

// var util            = require('util');

//=== configuration ===
var db              = require('./config/db');
var server          = require('./config/server');
var configSession   = require('./config/session');

require('./config/passport')(passport); // pass passport for configuration

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    var reqOrigin = req.headers.origin;
    if(server.XOallowedDomains.indexOf(reqOrigin) > -1){
        res.setHeader('Access-Control-Allow-Origin', reqOrigin);
    }
    next();
})

hbs.registerPartials(path.join(__dirname, '/app/views/partials'));

// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'hbs');

// required for passport
app.use(session({
    secret: configSession.session.secret,
    cookie: {
        maxAge: configSession.session.cookieAge
    },
    rolling: configSession.session.rolling,
    resave: configSession.session.resave,
    saveUninitialized: configSession.session.saveUninitialized
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//=== routes ===
require('./app/routes/routes')(app, passport); // configure our routes

// start app ===============================================
app.listen(process.env.PORT || server.port);

// shoutout to the user
console.log('Magic happens on port ' + process.env.PORT || server.port);
