
eohApp.controller('MainCtrl', function ($scope, $http) {
   $http.get("http://swapi.co/api/people").success(function(data) {
       $scope.people = data;

		angular.forEach($scope.people, function(people) {
		angular.forEach(people, function(person) {
 
		$http.get(person.species).success(function(data) {

		 $scope.species = data;
		 console.log(data);


	  	});

   });
});




		

   });
});




