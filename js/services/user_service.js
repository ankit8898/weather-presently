this.presentlyApp.factory("UserService",function(){
	var defaults = {
		location: 'autoip'
	};

	var service = {
		user: {},
		save: function(){
			sessionStorage.presently = angular.toJson(service.user);
		},
		restore: function() {
      // Pull from sessionStorage
      service.user = 
        angular.fromJson(sessionStorage.presently) || defaults

      return service.user;
    }	
	};

	service.restore();
	return service;
})