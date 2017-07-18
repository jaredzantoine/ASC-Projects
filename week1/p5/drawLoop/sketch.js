function setup(){
    createCanvas(800,800);
    background("purple");
}

var x = 0
//creat a variable outside foreloop
//function definition
function draw(){
   background("purple");
    //background goes before the ellipse is drawn
    ellipse(x,200,200,200);
    x = x + 1;
    //so it can move across the screen
    //x++;
}

//call the function