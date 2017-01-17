
eohApp.controller('MainCtrl', function ($scope, $http) {
   $http.get("http://swapi.co/api/people").success(function(data) {
       $scope.people = data;
		angular.forEach($scope.people, function(person){

		//Loop through species and get species
		console.log(person);
	

		});

		

   });
});


