eohApp.controller('DetailsCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
   $http.get("http://swapi.co/api/people").then(function (response) {
   	var data = response.data;
    $scope.people = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);










