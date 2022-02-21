let ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
}

if (ball.x > width || ball.x <)