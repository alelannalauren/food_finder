var position = "cp1";

var display1 = function(){
	document.getElementById(position).innerHTML ="<h1 Produce></h1>";
	position = "cp1";
	document.getElementById(position).innerHTML ="<div id='circle'></div>";
	clear();
	document.getElementById('produce').style.backgroundColor = "#01DF3A";
}

var display2 = function(){
	document.getElementById(position).innerHTML ="";
	position = "meat";
	document.getElementById(position).innerHTML ="<div id='circle'></div>";
	clear();
	document.getElementById('meat').style.backgroundColor = "#FF0303";
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

var produceItems = 
	[
	"tomatoes",
	"potatoes",
	"apples",
	"bananas",
	"peaches",
	"lettuce",
	"cabbage",
	"carrots",
	"oranges",
	"grapes",
	"cucumbers",
	"asparagus",
	"broccoli",
	"cherries",
	"strawberries",
	"blueberries",
	"blackberries",
	"raspberries",
	"cranberries",
	// "limes",
	"lemons"
	]
}

var searchbar = document.getElementById("search")
searchbar.addEventListener("keyup", function () {
	if (produceItems.includes(grapes)) {
	document.getElementById('produce').style.backgroundColor = "#01DF3A";
	}
})




