document.getElementById('pbutton').onclick = pduplicate;
var i = 0;
var poriginal = document.getElementById('pduplicater');

function pduplicate() {
    var clone = poriginal.cloneNode(true); // "deep" clone
    clone.id = "pduplicetor" + ++i; // there can only be one element with an ID
    poriginal.parentNode.appendChild(clone);
	
	
	
	var pdir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    var PDData = pdir[Math.floor(Math.random() * pdir.length)];
	var PAData = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    var PTData = Math.floor(Math.random() * (100.8 - 91.8 + 1)) + 91.8;
	var PALData = Math.floor(Math.random() * (60 - 10000 + 1)) + 10000;
	
	
	document.getElementById("PlaneDirection").innerHTML = PDData + ' Direction';
	document.getElementById("PlaneAngle").innerHTML = PAData + ' degrees';
	document.getElementById("PlaneTemp").innerHTML = PTData + ' fahrenheit';
	document.getElementById("PlaneAltitude").innerHTML = PALData + ' feet';
}

//function unduplicate() {
//document.getElementById('duplicetor').innerHTML="";
//document.getElementById('duplicater').innerHTML="";
//}