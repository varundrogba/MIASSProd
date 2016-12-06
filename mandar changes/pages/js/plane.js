
//check cluster / individual

//if cluster pull, all  .js files inside fitbit will be pulled and random data is sent to user

$(function() {

	var pdir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var PDData = pdir[Math.floor(Math.random() * pdir.length)];
	var PAData = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    var PTData = Math.floor(Math.random() * (100.8 - 91.8 + 1)) + 91.8;
	var PALData = Math.floor(Math.random() * (60 - 10000 + 1)) + 10000;
	
	document.getElementById("PlaneDirection").innerHTML = PDData + ' Direction';
	document.getElementById("PlaneAngle").innerHTML = PAData + ' degrees';
	document.getElementById("PlaneTemp").innerHTML = PTData + ' fahrenheit';
	document.getElementById("PlaneAltitude").innerHTML = PALData + ' feet';
});