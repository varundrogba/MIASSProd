var admin_page=angular.module('admin_page',[]);

admin_page.controller('admin_page_controller',['$scope','$http',function($scope,$http){

		console.log("in admin controller--------------");
		var user_name_array=[];

		$http.get('/user_rec').success(function(response){
			console.log(response);
			var active_fitbit=0;
			var active_plane=0;
			var active_car=0;
			var active_array=[];
			var i=0;
			for(i=0;i<response.length;i++)
			{
				//console.log(i+"---"+response[i].fitbit.length);
				active_fitbit +=response[i].fitbit.length;
				active_car +=response[i].car.length;
				active_plane +=response[i].plane.length;
				active_array[i]=active_fitbit+active_car+active_plane;


			}
			//console.log(user_name_array);
			$scope.contactsarray=response;
			$scope.active_array=active_array;
			console.log("fitbit---"+active_fitbit);
			console.log("plane---"+active_plane);
			console.log("car---"+active_car);
			Highcharts.chart('container', {
			    chart: {
			        type: 'pie',
			        options3d: {
			            enabled: true,
			            alpha: 45
			        }
			    },
			    title: {
			        text: ''
			    },
			    plotOptions: {
			        pie: {
			            innerSize: 100,
			            depth: 45
			        }
			    },
			    series: [{
			        name: 'Active Sensors',
			        data: [
			            ['Fitbit', active_fitbit],
			            ['Plane', active_plane],
			            ['Car', active_car],

			        ]
			    }]
			});

		});


		$http.get('/inactive_sensors_data').success(function(response)
		{
			console.log(response);
			var inactive_fitbit=0;
			var inactive_car=0;
			var inactive_plane=0;
			for(i=0;i<response.length;i++)
			{
				if(response[i].sensor_name=="fitbit")
				{
					inactive_fitbit=inactive_fitbit+1;
				}
				else if(response[i].sensor_name=="plane")
				{
					inactive_plane=inactive_plane+1;	
				}
				else if(response[i].sensor_name=="car")
				{
				 	inactive_car=inactive_car+1;	
				}
			}


			console.log("inact-fitbit---"+inactive_fitbit);
			console.log("inact-plane---"+inactive_plane);
			console.log("inact-car---"+inactive_car);

			Highcharts.chart('container_2', {
			     chart: {
			         type: 'column'
			     },
			     title: {
			         text: ''
			     },

			     xAxis: {
			         categories: [
			             'Sensors',

			         ],
			         crosshair: true
			     },
			     yAxis: {
			         min: 0,
			         title: {
			             text: 'Number'
			         }
			     },
			     tooltip: {
			         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			             '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
			         footerFormat: '</table>',
			         shared: true,
			         useHTML: true
			     },
			     plotOptions: {
			         column: {
			             pointPadding: 0.2,
			             borderWidth: 0
			         }
			     },
			     series: [{
			         name: 'Fitbit',
			         data: [inactive_fitbit]

			     }, {
			         name: 'Plane',
			         data: [inactive_plane]

			     }, {
			         name: 'Car',
			         data: [inactive_car]

			     }]
			 });


		});

}]);