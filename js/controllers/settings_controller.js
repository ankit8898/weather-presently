this.presentlyApp.controller("SettingsCtrl", function($scope,UserService,Weather) {

  $scope.user = UserService.user;
  $scope.fetchCities = Weather.getCityDetails;
  
  $scope.save = function (){

    UserService.save();
  }
});
