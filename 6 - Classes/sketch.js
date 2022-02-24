let bubble;

function setup() {
    createCanvas(600, 400);
    bubble = new Bubble();
    print(bubble.x, bubble.y);
}

function draw() {
    background(0);
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
}