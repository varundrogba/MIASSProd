var loginapp=angular.module('loginapp',[])


loginapp.controller('logincontroller',['$scope','$http',function($scope,$http){

	console.log("hello from admin_login js--");


	$scope.userAuth=function(email,password){
		console.log(email);
		$http.get('/admin_auth/'+email +'/'+ password).success(function(response){

				console.log(response);


				if(response=="success"){
					//$scope.login.status="";
					window.location="/admin.html"
				}
				else{
					$scope.login.status="Invalid email or password";
				}
		});
	}




}]);