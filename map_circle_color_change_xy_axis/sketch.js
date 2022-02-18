// let r = 0;
// let b = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background(220);
  background(0);
  colX = map(mouseX, 0, 600, 0, 255);
  colY = map(mouseY, 0, 660, 255, 0);
  fill(mouseX, mouseY, mouseX);
  ellipse(mouseX, mouseY, 64, 64);
}
