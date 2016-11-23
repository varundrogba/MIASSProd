var login = angular.module('myApp-login');

myApp-login.controller('AppCtrl-login', ['$scope', '$http', function($scope, $http) { 


$scope.auth = function(email,pass){
		
		$scope.user.email=email;
		$scope.user.pass=pass;
	
	$http.post('/login', $scope.user).success(function(response){
		console.log("i have got the user details");

		if(response.isAuth === true){
			location.href ="index.html";
			$scope.user=response;
		}else{
			location.href ="login.html";
		}
	})
};



}]);
