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
        'XOallowedDomains': ["*"],
    },
    'session': {
        'secret': 'supersecretsamplestring',
        'cookieAge': 3600,
        'rolling': true,
        'resave': true, 
        'saveUninitialized': false,
    },
    'auth': {
        'google': {
            'clientID': 'your-google-clientID',
            'clientSecret': 'your-google-clientSecret',
            'callbackUrl': 'http://localhost:8080/auth/google/callback',
            // 'allowedDomain': 'example.com',
        }
    },
    'db': {
        'mongodb': {
            'dev': 'mongodb://localhost:27017/wotd',
            'prod': 'mongodb://localhost:27017/wotd',
        }
    }
}