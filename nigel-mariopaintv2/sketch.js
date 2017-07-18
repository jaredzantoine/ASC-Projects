function setup() { 
    createCanvas(600, 600);
    background(200);
    fill("red");
    ellipse(20,20,20);
    fill("black");
    strokeWeight(3);
    fill("orange");
    rect(30,30,30);
    fill("green");
    triangle(10,10,10)
}

function roll(n) {
   return Math.floor(Math.random() * n);
}
function mouseDragged() {
    fill(roll(250),roll(250), roll(250));
    rect(mouseX, mouseY, roll(50), roll(50));
    ellipse(mouseX, mouseY, roll(50), roll(50));
    triangle(mouseX, mouseY, roll(50), roll(50));
  // prevent default
   return false;
}



  
    