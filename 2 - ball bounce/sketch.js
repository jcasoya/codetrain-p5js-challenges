let ball = {
  x: 0,
  y: 0,
  xspeed: 5,
  yspeed: -3,
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  move();
  bounce();
  display();
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y  + ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = -ball.xspeed;  
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = -ball.xspeed;
  }
}

function display() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
}