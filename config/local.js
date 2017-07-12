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
        'XOallowedDomains': process.env['server.XOallowedDomains'].split(','),
    },
    'session': {
        'secret': process.env['session.secret'],
        'cookieAge': 604800000,
        'rolling': true,
        'resave': true, 
        'saveUninitialized': false,
    },
    'auth': {
        'google': {
            'clientID': process.env['auth.google.clientID'],
            'clientSecret': process.env['auth.google.clientSecret'],
            'callbackUrl': process.env['auth.google.callbackUrl'],
            'allowedDomain': process.env['auth.google.allowedDomain'],
        }
    },
    'db': {
        'mongodb': {
            'dev': 'mongodb://localhost:27017/wotd',
            'prod': 'mongodb://localhost:27017/wotd',
        }
    }
}