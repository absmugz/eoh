var eohApp = angular.module('eohApp', ['ngRoute', 'swapi']);

eohApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl : 'views/main.html',
      controller : 'MainCtrl'
    }).
  when('/details/:itemId', {
      templateUrl : 'views/details.html',
      controller : 'DetailsCtrl'
    }).
    otherwise('/');
  }
]);