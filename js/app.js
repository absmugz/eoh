var eohApp = angular.module('eohApp', ['ngRoute', 'swapi']);

eohApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl : 'views/main.html',
      controller : 'MainCtrl'
    }).
	when('/details/:person', {
      templateUrl : 'views/details.html',
      controller : 'DetailsCtrl'
    }).
    otherwise('/');
  }
]);