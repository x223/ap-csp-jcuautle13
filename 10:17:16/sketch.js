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
  if (key === '1') {
    strokeColor = '#3C0CE8';
    weight = 10
  } else if (key === '2') {
    strokeColor = '#E32173';
    weight = 10
  } else if (key === '3') {
    strokeColor = '#F2F5EF';
    weight = 10
  } else if (key == "4") {
    strokeColor = "#00FFEC";
    weight = 10
  } else if (key == '5') {
    strokeColor = "White";
    weight = 50
  }
}