	     // Load the Visualization API and the corechart package.
	     google.charts.load('current', {'packages':['corechart']});

	     // Set a callback to run when the Google Visualization API is loaded.
	     google.charts.setOnLoadCallback(drawChart);

	     // Callback that creates and populates a data table,
	     // instantiates the pie chart, passes in the data and
	     // draws it.
		 
	var dir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var CData = dir[Math.floor(Math.random() * dir.length)];
	var PData = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    var TData = Math.floor(Math.random() * (100.8 - 91.8 + 1)) + 91.8;
	var HData = Math.floor(Math.random() * (60.00 - 100.00 + 1)) + 100.00;		 
		 
	     function drawChart() {

	       // Create the data table.
	       var data = new google.visualization.DataTable();
	       data.addColumn('string', 'Topping');
	       data.addColumn('number', 'Slices');
	       data.addRows([
	         ['', 3],
	         ['Onions', 5],
	         ['Olives', 1],
	         ['Zucchini', 1],
	         ['Pepperoni', 2]
	       ]);

	       // Set chart options
	       var options = {'title':'',
	                      'width':400,
	                      'height':300};

	       // Instantiate and draw our chart, passing in some options.
	       var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	       chart.draw(data, options);
	     }