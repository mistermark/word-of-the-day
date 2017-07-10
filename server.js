var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var path            = require('path');
var hbs             = require('hbs');

//=== configuration ===
var server          = require('./config/server');

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

hbs.registerPartials(path.join(__dirname, '/app/views/partials'));

// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'hbs');

//=== routes ===
require('./app/routes/routes')(app); // configure our routes


// start app ===============================================
app.listen(process.env.PORT || server.port);

// shoutout to the user
console.log('Magic happens on port ' + process.env.PORT || server.port);
