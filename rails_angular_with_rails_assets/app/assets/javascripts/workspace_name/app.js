this.app = angular.module('MyApp', [
  'ngRoute',
  'templates',
  'MyApp.userService',
  'MyApp.welcomeController',
  'MyApp.usersControllers',
]);

this.app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

  $httpProvider.defaults.headers.common['X-CSRF-Token'] = jQuery('meta[name=csrf-token]').attr('content')

  $routeProvider.when('/', {
    templateUrl: 'workspace_name/templates/welcome.html',
    controller: 'WelcomeCtrl'
  }).when('/404', {
    templateUrl: 'workspace_name/templates/404.html',
  }).when('/test', {
    templateUrl: 'workspace_name/templates/reports/index.html',
    controller: 'UsersCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);

this.app.run(function() {
  alert('angular app initialized');
});


