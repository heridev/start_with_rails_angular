this.app = angular.module('MyApp.welcomeController', [
  'angularjs-dropdown-multiselect'
]);

this.app.controller('WelcomeCtrl', ['$scope', function($scope) {
  $scope.welcomeMsg = 'Welcome';

  $scope.example1model = [];
  $scope.example1data = [
    {
      id: 1,
      label: "David"
    },
    {
      id: 2,
      label: "Jhon"
    },
    {
      id: 3,
      label: "Danny"
    }
  ];
}]);
