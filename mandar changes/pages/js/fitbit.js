
//check cluster / individual

//if cluster pull, all  .js files inside fitbit will be pulled and random data is sent to user

$(function() {

	var dir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var CData = dir[Math.floor(Math.random() * dir.length)];
	var PData = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    var TData = Math.floor(Math.random() * (100.8 - 91.8 + 1)) + 91.8;
	var HData = Math.floor(Math.random() * (60.00 - 100.00 + 1)) + 100.00;
	
	document.getElementById("Compass").innerHTML = CData + ' Direction';
	document.getElementById("Pulse").innerHTML = PData + ' pulses per minute';
	document.getElementById("Temp").innerHTML = TData + ' fahrenheit';
	document.getElementById("Beat").innerHTML = HData + ' beats per minute';
});