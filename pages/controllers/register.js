var register = angular.module('myApp-register');

myApp-register.controller('AppCtrl-register', ['$scope', '$http', function($scope, $http) { 


$scope.register = function(email,pass){
		
		$scope.user.email=email;
		$scope.user.pass=pass;
	
	$http.post('/register', $scope.user).success(function(response){
		console.log("i have got the user details");

		
	})
};



}]);
