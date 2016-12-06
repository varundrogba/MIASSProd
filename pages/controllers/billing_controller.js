	var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',function($scope, $http) {
    console.log("Hello World from controller");


 	$http.get('/session_req_sensor_controller').success(function(response)
 	{
		var email="";
 		console.log("inside");
 		console.log(response);
 		email = response;
 	
 		$http.get('/billing_data_query/'+response).success(function(response){
 			console.log("inside");
 			console.log("----------"+response[0].email);
 			var array_length=response.length;
 			var i;
 			var bill_array=[];
 			for(i=0;i<array_length;i++)
 			{
 				var start_date=new Date(response[i].start_date);
 				var end_date=new Date(response[i].end_date);
 				var bill = Math.abs(end_date.getTime() - start_date.getTime());
 				var minDiff = Math.round(bill / 60 / 1000);
 				console.log(minDiff);
 				var amount=minDiff*0.00347;
 				console.log("Your bill amount is: $"+amount);
 				bill_array[i]=amount;

 			}

 			console.log(bill_array.length);
 			var total_due=0;
 			for(i=0;i<bill_array.length;i++)
 			{
 				total_due +=bill_array[i];
 			}
 			console.log("total_due"+total_due);
 			console.log("email: "+ email);
 			$http.post('/total_due/'+response[0].email+'/'+total_due).success(function(response){
 				console.log(response);
 				//email = "";
 			});




 			$scope.contactsarray=response;
 			$scope.bill_amount_array=bill_array;
 			// <td>{{contacts.amount}}</td>

 		});


 	});


}]);