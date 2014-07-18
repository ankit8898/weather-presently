this.presentlyApp.controller("MainCtrl", function($scope, $timeout,Weather,UserService) {
  var updateTime;
  $scope.date = {};
  $scope.user = UserService.user; 

  $scope.weather = {}
    // Hardcode San_Francisco for now
    Weather.getWeatherForecast($scope.user.location)
    .then(function(data) {
      $scope.weather.forecast = data;
    });

  updateTime = function() {
    $scope.date.raw = new Date();
    $timeout(updateTime, 1000);
  };
  return updateTime();
});
