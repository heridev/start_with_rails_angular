this.app = angular.module('MyApp.userService', [
  'restangular',
  'MyApp.userModel',
]);

this.app.factory('UserService', ['Restangular',
                                 'User',
                                 function(
                                   Restangular,
                                   User
                                 ) {
    var model;

    model = 'api/v1/users';

    Restangular.extendModel(model, function(obj) {
      return angular.extend(obj, User);
    });

    return {

      list: function() {
        return Restangular.all(model).getList();
      },

    };
  }
]);

