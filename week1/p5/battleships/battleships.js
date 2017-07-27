var grid = [ [], [], [], [] ]; 

function setup(){
    createCanvas(560,560);
    background("#2288ee");
        frameRate(1); 
   
}

function draw(){
    rectMode(CORNER);
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            fill("white");
            strokeWeight(6);
            rect(i*70, j*70, 70, 70);
        }
    }
}

function mouseClicked(){ 
    
}
