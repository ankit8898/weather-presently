this.presentlyApp.provider('Weather', function() {
  var apiKey = "";

  this.setApiKey = function(key) {
    if (key) this.apiKey = key;
  };

  this.$get = function($http) {
    return {
      // Service object
    }
  }
})