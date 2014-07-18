this.presentlyApp.controller("MainCtrl", function($scope, $timeout,Weather) {
  var updateTime;
  $scope.date = {};

   $scope.weather = {}
    // Hardcode San_Francisco for now
    Weather.getWeatherForecast("CA/San_Francisco")
    .then(function(data) {
      $scope.weather.forecast = data;
    });
    
  updateTime = function() {
    $scope.date.raw = new Date();
    $timeout(updateTime, 1000);
  };
  return updateTime();
});
