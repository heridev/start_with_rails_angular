this.app = angular.module('MyApp.usersControllers', [
  'MyApp.userService',
]);

this.app.controller('UsersCtrl', ['$scope',
                                  '$location',
                                  'UserService',
                                  function(
                                    $scope,
                                    $location,
                                    UserService
                                  ) {
  var load;

  $scope.controllerTitle = 'User Lists';

  load = function() {
    return UserService.list().then(function(users) {
      return $scope.users = users;
    });
  };

  load();

  $scope.addUser = function() {
    return $location.path('/users/new');
  };
}]);
