function setup() {
  createCanvas(windowWidth, windowHeight);
  background('pink');
  fill(255);
  noStroke();
}

let xPos = 0;
let xVelocity = 5;

// function update() {

// }

function draw() {
  background('pink');
  ellipse(xPos, 50, 50, 50);
  xPos += xVelocity;
  // Make the ellipse animate
  if ((xPos > width) || (xPos < 0)) {
    xVelocity = -xVelocity;
  }
}
