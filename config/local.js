// Main configuration

module.exports = {
    'view': {
        'site': {
            'title': 'Word of the Day App',
        },
        'pages': {
            'index': {
                "title": "Word of the Day",
                "description": "Displaying a random Word of the Day in a random language",
            },
            'login': {
                "title": "Word of the Day",
                "description": "Displaying a random Word of the Day in a random language",
            },
            'notfound': {
                'title': 'Page not found',
                'message': 'This isn\'t the page you\'re looking for.',
                'urlLabel': 'You\'ve entered:',
            }
        }
    },
    'server': {
        'port': '8080',
        'XOallowedDomains': process.env['server_XOallowedDomains'].split(','),
    },
    'session': {
        'secret': process.env['session_secret'],
        'cookieAge': 604800000,
        'rolling': true,
        'resave': true, 
        'saveUninitialized': false,
    },
    'auth': {
        'google': {
            'clientID': process.env['auth_google_clientID'],
            'clientSecret': process.env['auth_google_clientSecret'],
            'callbackUrl': process.env['auth_google_callbackUrl'],
            'allowedDomain': process.env['auth_google_allowedDomain'],
        }
    },
    'db': {
        'mongodb': {
            'dev': 'mongodb://localhost:27017/wotd',
            'prod': 'mongodb://localhost:27017/wotd',
        }
    }
}