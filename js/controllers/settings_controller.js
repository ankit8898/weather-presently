this.presentlyApp.controller("SettingsCtrl", function($scope,UserService) {

$scope.user = UserService.user;
 $scope.save = function (){

  UserService.save();
}
});
