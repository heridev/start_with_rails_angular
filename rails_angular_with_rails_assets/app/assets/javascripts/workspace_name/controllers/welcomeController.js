this.app = angular.module('MyApp.welcomeController', []);

this.app.controller('WelcomeCtrl', ['$scope', function($scope) {
  $scope.welcomeMsg = 'Welcome';
}]);
