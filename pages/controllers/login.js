var loginapp=angular.module('loginapp',[])


loginapp.controller('logincontroller',['$scope','$http',function($scope,$http){

console.log("Hello from controller....");



$scope.gotoRegister=function(){
	window.location="/register.html";
}



























}]);