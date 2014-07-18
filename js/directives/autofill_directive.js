this.presentlyApp.directive('autoFill', function($timeout) {
  return {
    restrict: 'EA',
    scope: {
      autoFill: '&',
      ngModel: '='
    },
    compile: function(tEle, tAttrs) {
      var tplEl = angular.element('<div class="typeahead">' +
        '<input type="text" autocomplete="off" />' +
        '<ul id="autolist" ng-show="reslist">' +
        '<li ng-repeat="res in reslist" ' +
        '>{{res.name}}</li>' +
        '</ul>' +
        '</div>');
      var input = tplEl.find('input');
      input.attr('type', tAttrs.type);
      input.attr('ng-model', tAttrs.ngModel);
      console.log(tEle)
      tEle.replaceWith(tplEl);

      return function(scope, ele, attrs, ctrl) {

       var minKeyCount = attrs.minKeyCount || 3,
       timer,
       input = ele.find('input');


       input.bind('keyup', function(e) {
        val = ele.val();
        if (val.length < minKeyCount) {
          if (timer) $timeout.cancel(timer);
          scope.reslist = null;
          return;
        } else {
          if (timer) $timeout.cancel(timer);
          timer = $timeout(function() {
            scope.autoFill()(val)
            .then(function(data) {
              if (data && data.length > 0) {
                scope.reslist = data;
                scope.ngModel = data[0].zmw;
              }
            });
          }, 300);
        }
      });

       input.bind('blur', function(e) {
        scope.reslist = null;
        scope.$digest();
      });
     }
   }
 }
});