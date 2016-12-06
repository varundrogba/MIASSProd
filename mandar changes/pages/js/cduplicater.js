document.getElementById('cbutton').onclick = cduplicate;
var i = 0;
var coriginal = document.getElementById('cduplicater');

function cduplicate() {
    var clone = coriginal.cloneNode(true); // "deep" clone
    clone.id = "cduplicetor" + ++i; // there can only be one element with an ID
    coriginal.parentNode.appendChild(clone);
	
	
	
	var cdir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var CDData = cdir[Math.floor(Math.random() * cdir.length)];
	var CSData = Math.floor(Math.random() * (10 - 120 + 1)) + 120;
    var CTData = Math.floor(Math.random() * (100.8 - 91.8 + 1)) + 91.8;
	//var PALData = Math.floor(Math.random() * (60 - 10000 + 1)) + 10000;
	
	
	document.getElementById("CarDirection").innerHTML = CDData + ' Direction';
	document.getElementById("CarSpeed").innerHTML = CSData + ' mph';
	document.getElementById("CarTemp").innerHTML = CTData + ' fahrenheit';
	//document.getElementById("PlaneAltitude").innerHTML = PALData + ' feet';
}

//function unduplicate() {
//document.getElementById('duplicetor').innerHTML="";
//document.getElementById('duplicater').innerHTML="";
//}