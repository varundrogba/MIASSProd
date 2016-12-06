
var registerapp=angular.module('registerapp',[])



registerapp.controller('registercontroller',['$scope','$http',function($scope,$http){

console.log("Hello from  register controller....");


$scope.registeruser= function(){
	console.log($scope.newuser);
	$http.post('/registerNewUser',$scope.newuser);
	window.location="/login.html";
}

$scope.checkPassword = function () {
    $scope.registration_form.confirmpassword.$error.dontMatch = $scope.newuser.password !== $scope.newuser.confirmpassword;
};

}]);