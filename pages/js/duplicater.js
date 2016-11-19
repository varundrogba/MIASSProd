document.getElementById('button').onclick = duplicate;
var i = 0;
var original = document.getElementById('duplicater');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicetor" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
	
	var dir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var CData = dir[Math.floor(Math.random() * dir.length)];
	var PData = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    var TData = Math.floor(Math.random() * (100.8 - 91.8 + 1)) + 91.8;
	
	document.getElementById("Compass").innerHTML = CData + ' Direction';
	document.getElementById("Pulse").innerHTML = PData + ' pulses per minute';
	document.getElementById("Temp").innerHTML = TData + ' fahrenheit';
}

function unduplicate() {
document.getElementById('duplicetor').innerHTML="";
document.getElementById('duplicater').innerHTML="";
}