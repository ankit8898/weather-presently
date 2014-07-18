this.presentlyApp = angular.module('presentlyApp', ['ngRoute']);


this.presentlyApp.config(function(WeatherProvider) {
  WeatherProvider.setApiKey('cf502edc2d7ae088');
})


this.presentlyApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html', 
      controller: 'MainCtrl'
    })
    .when('/settings', {
      templateUrl: 'templates/settings.html',
      controller: 'SettingsCtrl'
    })
    .otherwise({redirectTo: '/'});
})