function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125, 255, 125);
}

function draw() {
  // print(millis());
  // if (millis() > 2000) {
  //   background(125, 125, 255);
  // }
  // print(minute());
  // print(second());
  let secondsNow = second();
  let myDiameter = map(secondsNow, 0, 59, 590, 0);
  ellipse(width/2, height/2, myDiameter);
}
