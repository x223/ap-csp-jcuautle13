var xpos =50;
var ypos = 50;
var xpos1 = 100;
var ypos1 = 100;
var xdir = 10;
var ydir = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
	ellipse(xpos, ypos, 50 , 50);
	ellipse(xpos1,ypos1,50, 50);
	xpos = xpos + xdir;
	xpos1 = xpos1 + xdir;
	if (xpos >= windowWidth || xpos <= 25){
		xdir = xdir * -1;
	}
}