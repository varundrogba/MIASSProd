var loginapp=angular.module('loginapp',[])


loginapp.controller('logincontroller',['$scope','$http',function($scope,$http){

console.log("Hello from login controller....");



$scope.gotoRegister=function(){
	window.location="/register.html";
}


$scope.userAuth=function(email,password){

	console.log($scope.login);
	console.log(email);
	$http.get('/userAuthenticationMethod/'+email +'/'+ password, $scope.login).success(function(response){

		
			console.log(response);
		

		if(response=="success"){
			//$scope.login.status="";
			window.location="/dashboard.html"
		}
		else{
			$scope.login.status="Invalid email or password";
		}


	})

}

}]);