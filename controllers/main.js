eohApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
   $http.get("http://swapi.co/api/people").then(function (response) {
   	var data = response.data;
    $scope.people = data;
    console.log($scope.people);
  });



}]);


