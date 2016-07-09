var position = "cp1";

var display1 = function(){
	document.getElementById(position).innerHTML ="";
	position = "produce";
	document.getElementById(position).innerHTML ="<div id='circle'></div>";
	clear();
	document.getElementById('produce').style.backgroundColor = "#01DF3A";
}

var display2 = function(){
	document.getElementById(position).innerHTML ="";
	position = "meat";
	document.getElementById(position).innerHTML ="<div id='circle'></div>";
	document.getElementById(meat).
	clear();
	document.getElementById('meat').style.backgroundColor = "red";
}

var display3 = function(){
	document.getElementById(position).innerHTML ="";
	position = "dairy";
	document.getElementById(position).innerHTML ="<div id='circle'></div>";
	clear();
	document.getElementById('dairy').style.backgroundColor = "#F78181";
}

var display4 = function(){
	clear();
	document.getElementById('frozen').style.backgroundColor = "#FF8000";
}

var display5 = function(){
	clear();
	document.getElementById('non-perishable goods').style.backgroundColor = "#FFFF00";
}

var display6 = function(){
	clear();
	document.getElementById('seafood').style.backgroundColor = "#58ACFA";
}

var clear = function(){
	for (var i = 0; i <= 5; i++) {
		document.getElementsByClassName('section')[i].style.backgroundColor = "gray";
	};
};







