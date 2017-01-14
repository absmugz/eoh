var eohApp = angular.module('eohApp', ['ngRoute']);

eohApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl : 'views/main.html',
      controller : 'MainCtrl',
      controllerAs : 'main'
    })
    .otherwise('/');
  }
]);