function setup() {
  createCanvas(windowWidth, windowHeight);
  background('gold'); // Only draw once 
}

function draw() {
  noStroke();
  rect(200, 200, 200, 200); 
}

// function mousePressed() {
//  background(255, 125, 125); 
// }
// function mouseReleased() {
//   background('gold');
// }

// The rectangle fill color is changed upon every click
function mouseClicked() {
  fill(random(0, 255), 125, 125);
  rect(mouseX, mouseY, 80, 80); // The small rectangle will be retained
}

function mouseMoved() {
  stroke(0);
  line(0,0,mouseX,mouseY);
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('myCanvas', 'jpg'); // save the current canvas into a jpg
  } else if (key == 'r') {
    background('gold'); // clear the canvas
  }
}