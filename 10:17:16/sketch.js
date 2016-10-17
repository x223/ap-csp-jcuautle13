var strokeColor = "black"
var weight = 10
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  
  if (mouseIsPressed) {
    stroke(strokeColor)
    strokeWeight(weight)
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function keyTyped() {
  if (key === 'b') {
    strokeColor = 'blue';
  } else if (key === 'p') {
    strokeColor = '#E32173';
  } else if (key === 'l') {
    strokeColor = 'white';
    weight = 50
  }
}