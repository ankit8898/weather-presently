this.presentlyApp = angular.module('presentlyApp', []);


this.presentlyApp.config(function(WeatherProvider) {
  WeatherProvider.setApiKey('cf502edc2d7ae088');
})