

$(function() {

	var cdir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var CDData = cdir[Math.floor(Math.random() * cdir.length)];
	var CSData = Math.floor(Math.random() * (10 - 120 + 1)) + 120;
    var CTData = Math.floor(Math.random() * (100.8 - 91.8 + 1)) + 91.8;
	var CGData = Math.floor(Math.random() * (1 - 6 + 1)) + 6;
	
	document.getElementById("CarDirection").innerHTML = CDData + ' Direction';
	document.getElementById("CarSpeed").innerHTML = CSData + ' mph';
	document.getElementById("CarTemp").innerHTML = CTData + ' fahrenheit';
	document.getElementById("CarGear").innerHTML = CGData + ' current gear';
});