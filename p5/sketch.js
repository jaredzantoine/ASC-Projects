console.log("hello world!");

function setup() {
    createCanvas(500, 500);
    //background(R value: 0-255)
    background(225);
   // make the backgroud
    fill("yellow");
    ellipse(width / 2, height / 2, 400);
    fill("black");
    //make everything black
    //thickier lines
    strokeWeight(10);
    line(80, 150, 420, 150);
    //mouth line
    line(150, 350, width - 150, 350);
    //rectangles
    rect(150, 150, 80, width / 6);
    rect(280, 150, 80, width / 6);}


