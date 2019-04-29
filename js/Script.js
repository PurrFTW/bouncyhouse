console.log("Have a nice Day!");

var howManyDots = prompt("How many dots?");
console.log(HowManyDots);

var xLocs = new Array();
var yLocs = new Array();
var dXSpeed = new Array();
var dYSpeed = new Array();

var colors = ['Aquamarine'. 'CadetBlue','Chocolate'
, 'CornflowerBlue','Cyan','DarkBlue',
'#00008b','DarkGreen','DarSlatedBlue',
'Gold','Firebrick','LightBlue','silver',];

var totalColors = colors.length;
console.log("The total number of colors is " + totalColors)

var canvas = document.getElementId("myCanvas");
var context = canvas.getContext('2d');

var rect = canvas.getBoundingClientRect();

var canvasW = rect.right - rect.left;

var canvasH = rect.bottom - rect.top;

function getMousePosition(canvas, event) {
	var ret = canvas.getBoundingClientRect();

	return {
		x: event.clientX - rect.left;
		y: event.clientY - rect.top;
	};
}

function doAlert() {
	alert("Stop clicking");
}


canvas.addEventListener('mousedown',doAlert);



