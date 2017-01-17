eohApp.controller('MainCtrl', function ($scope, $http) {
   $http.get("http://swapi.co/api/people/1").success(function(data) {
       $scope.person = data;
   });
});