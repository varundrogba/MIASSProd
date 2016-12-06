
	  	window.onload=function(){
	  				console.log("hello ,,,,,,");
   					$.get('http://localhost:8080/data', {}, function(data){
        			var rec_length=data.length;
        			var stopped_fitbit=0;
        			var stopped_car=0;
        			var stopped_plane=0;
        			for(i=0;i<rec_length;i++)
        			{
        					if(data[i].sensor_name=="fitbit")
        					{
        						stopped_fitbit=stopped_fitbit+1;
        						
        					}
        					else if(data[i].sensor_name=="plane")
        					{
        						stopped_plane=stopped_plane+1;	
        						
        					}
        					else if(data[i].sensor_name=="car")
        					{
        					 	stopped_car=stopped_car+1;	
        					 	
        					}
        			}
        			console.log("stopped_fitbit"+stopped_fitbit);
        			console.log("stopped_plane"+stopped_plane);
        			console.log("stopped_car"+stopped_car);
        			//var stopped=[stopped_fitbit,stopped_plane,stopped_car]
        			//console.log(data[0].sensor_name)
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Past Sensor Cloud Usage Data '
        },
        xAxis: {
            type: 'category'	
        },
        yAxis: {
            title: {
                text: 'Number of Used Sensors'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    //format: '{point.y:.1f}%'
                }
            }
        },

        //tooltip: {
          //  headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
           // pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        //},

        series: [{
            name: 'Sensors',
            colorByPoint: true,
            data: [{
                name: 'Fitbit',
                y: stopped_fitbit
            }, {
                name: 'Plane',
                y: stopped_plane
            }, {
                name: 'Car',
                y: stopped_car
            }]
        }]
 
    });


		});
   		}
