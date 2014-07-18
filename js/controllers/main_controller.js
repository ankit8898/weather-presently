this.presentlyApp.controller("MainCtrl", function($scope, $timeout) {
  var updateTime;
  $scope.date = {};
  updateTime = function() {
    $scope.date.raw = new Date();
    $timeout(updateTime, 1000);
  };
  return updateTime();
});
