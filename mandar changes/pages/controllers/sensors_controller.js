var sensor_controller=angular.module('sensor_controller',[])


sensor_controller.controller('sensor_control',['$scope','$http',function($scope,$http){
var user_email;

	$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);

	});
//-------------------------------- to add a fitbit to network
	$scope.fitbit_start_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/new_fitbit/'+response+'/'+date).success(function(response){
			console.log(response);
		});


	});
	}


//-------------------------------- to remove fitbit from network

	$scope.fitbit_end_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/stop_fitbit/'+response+'/'+date).success(function(response){
			console.log(response);
		});


	});
	}

//-------------------------------- to add a plane to network
		$scope.plane_start_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/new_plane/'+response+'/'+date).success(function(response){
			console.log(response);
		});


	});
	}

//-------------------------------- to remove plane from network

	$scope.plane_end_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/stop_plane/'+response+'/'+date).success(function(response){
			console.log(response);
		});


	});
	}

//---------------------------- to add a car
		$scope.car_start_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/new_car/'+response+'/'+date).success(function(response){
			console.log(response);
		});


	});
	}
//-------------------------------- to remove car from network

	$scope.car_end_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/stop_car/'+response+'/'+date).success(function(response){
			console.log(response);
		});


	});
	}




}

]);