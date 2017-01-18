eohApp.controller(('DetailsCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
 $http.get("http://swapi.co/api/people/").success(function(data) {
    $scope.people = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.people.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);



