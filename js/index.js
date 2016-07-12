var position = "cp1";

var display1 = function(){
	document.getElementById(position).innerHTML ="";
	position = "cp1";
	document.getElementById(position).innerHTML ="<div id='circle'></div>";
	clear();
	document.getElementById('produce').style.backgroundColor = "#2EFE64";
};

var display2 = function(){
	document.getElementById(position).innerHTML ="";
	position = "cp4";
	document.getElementById(position).innerHTML ="<div id='circle'></div>";
	clear();
	document.getElementById('meat').style.backgroundColor = "#FF0303";
};

var display3 = function(){
	document.getElementById(position).innerHTML ="";
	position = "dairy";
	document.getElementById(position).innerHTML ="<div id='circle'></div>";
	clear();
	document.getElementById('dairy').style.backgroundColor = "#F78181";
};

var display4 = function(){
	clear();
	document.getElementById('frozen').style.backgroundColor = "#FF8000";
};

var display5 = function(){
	clear();
	document.getElementById('non-perishable goods').style.backgroundColor = "#FFFF00";
};

var display6 = function(){
	clear();
	document.getElementById('seafood').style.backgroundColor = "#58ACFA";
};

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
	"limes",
	"lemons",
	"corn"
	];

var search = function(searchItem){
	for (var i = 0; i < produceItems.length; i++) {
		if (produceItems[i] == searchItem){
			console.log("This is in produce.");
			display1();
		}
	}
	for (var i = 0; i < meatItems.length; i++) {
		if (meatItems[i] == searchItem){
			console.log("This is in meat.");
			display2();
		}
	}
}


var meatItems =
	[
	"ribeye steak",
	"new york steak",
	"chicken",
	"lamb chops",
	"turkey",
	"mutton",
	"corned beef"
	];

var searchIt = document.querySelector('#searchbox');
searchIt.addEventListener('submit', function(event) {
  event.preventDefault();
  foodsearch = this.querySelector('input').value;
  console.log("user searched for "+foodsearch);
  search(foodsearch);

});




