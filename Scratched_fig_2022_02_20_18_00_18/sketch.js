function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  stroke(255);
  
  let x = 0;

  while (x <= width) {
    ellipse(x, 200, 25, 25);
    x = x + 50;
  }
}
  
for ( let x = 0; x <= width; x = x +50) {
  fill(255, 0, 200);
  ellipse(x, 300, 25, 25);
}