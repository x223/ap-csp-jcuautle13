var clr = "Black"
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  fill(clr);
  ellipse(mouseX,mouseY,50,50);
  if(mouseX < 1 * windowHeight / 5){
    clr = "Red"
  } else if(mouseX < 2 * windowHeight / 5){
    clr = "Blue"
  } else if(mouseX < 3 * windowHeight / 5){
    clr = "Purple"
  } else if(mouseX < 4 * windowHeight / 5){
    clr = "Green"
  }
}