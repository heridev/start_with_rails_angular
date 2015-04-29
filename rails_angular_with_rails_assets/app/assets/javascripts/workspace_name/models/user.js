this.app = angular.module('MyApp.userModel', []);

this.app.factory('User', function() {
  return {
    test: function() {
      return this.email;
    }
  };
});
