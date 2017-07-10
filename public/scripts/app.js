
var app = angular.module('wordsApp', []);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

app.constant('wordsConfig', {
  'api': {
    'url': 'localhost',
    'words': '/api/words',
    'port': '8080'
  },
  'settings': {
    'alertsTimeout': 2400
  },
  'wordModel': {
    'word': null,
    'pronunciation': null,
    'definition': null,
    'meta': {
      'language': null,
      'author': null
    }
  }
});

app.controller('wordsAppController', ['$filter', '$timeout', 'wordsConfig', 'wordApi', 'localeList',
  function($filter, $timeout, config, api, locales) {
  var vm = this;

  vm.wordForm = {};
  vm.submitSuccess = {
    "success": false
  };

  api.getAll().then(function(res) {
      vm.allWords = res.data;
    });

  vm.languages = locales;

  vm.sendWord = function() {
    api.addNew(vm.wordForm)
      .then(function(res) {
        vm.submitSuccess = res.data;
        api.getAll()
          .then(function(res) {
            vm.allWords = res.data;
          });
      })
      .then(function(res) {
        vm.wordForm = config.wordModel;
        
        $timeout(function() {
          vm.submitSuccess = {};
        }, config.settings.alertsTimeout);
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  vm.clearForm = function(ev) {
    ev.preventDefault();
    vm.wordForm = config.wordModel;
  }

}]);

app.service('wordApi', ['$http', 'wordsConfig', function($http, config) {
  return {
    getAll: function() {
      return $http.get(config.api.words);
    },
    getSingle: function(word) {
      return $http.get(config.api.words + '/' + word);
    },
    addNew: function(model) {
      return $http.post(config.api.words, model, {"Content-Type": "application/json"});
    }
  }
}]);

app.service('localeList', function() {
  return {
      "en_US": "English",
      "zh_CH": "Chinese",
      "nl_NL": "Dutch",
      "ko_KR": "Korean",
      "ar_EG": "Arabic",
      "es_ES": "Spanish",
      "sr_CS": "Serbian",
      "it_IT": "Italian",
  }
});

// app.directive('languageOptions', ['$http', 'wordsConfig', function($http, config) {
//   return {
//     getAll: function() {
//       return $http.get(config.api.words);
//     },
//     addNew: function(model) {
//       return $http.post(config.api.words, model, {"Content-Type": "application/json"});
//     }
//   }
// }]);
