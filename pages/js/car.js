
//check cluster / individual

//if cluster pull, all  .js files inside fitbit will be pulled and random data is sent to user

$(function() {

	var cdir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var CDData = cdir[Math.floor(Math.random() * cdir.length)];
	var CSData = Math.floor(Math.random() * (10 - 120 + 1)) + 120;
    var CTData = Math.floor(Math.random() * (100.8 - 91.8 + 1)) + 91.8;
	//var PALData = Math.floor(Math.random() * (60 - 10000 + 1)) + 10000;
	
	document.getElementById("CarDirection").innerHTML = CDData + ' Direction';
	document.getElementById("CarSpeed").innerHTML = CSData + ' mph';
	document.getElementById("CarTemp").innerHTML = CTData + ' fahrenheit';
	//document.getElementById("PlaneAltitude").innerHTML = PALData + ' feet';
});