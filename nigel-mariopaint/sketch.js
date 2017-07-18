function setup() { 
    createCanvas(600, 600);
    background(200);
    fill("red");
    ellipse(10, 10, 10);
    fill("black");
    strokeWeight(3);

}
function roll(n) {
   return Math.floor(Math.random() * n);
}
function mouseDragged() {
    fill(roll(250),roll(250), roll(250));

ellipse(mouseX, mouseY, roll(50), roll(50));
  // prevent default
  
  return false;
}
  
    