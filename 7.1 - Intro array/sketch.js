let words = ["rainbow", "heart", "purple", "friendship", "love"];
let nums = [175, 20, 125, 8];

let index = 0;

function setup() {
  createCanvas(400, 400);
}

// function draw() {
//   background(0);

//   fill(255);
//   textSize(32);
//   text(words[index], 12, 200);
// }

// function mousePressed() {
//   index = index + 1;

//   if (index == words.length) {
//     index = 0;
//   }
// }

function draw() {
  background(0);

  fill(255);
  ellipse(120, 200, nums[index], nums[index]);
}

function mousePressed() {
  index = index + 1;

  if (index == nums.length) {
    index = 0;
  }
}
