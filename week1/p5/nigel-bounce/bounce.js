function setup(){
    createCanvas(800,800);
    background(85,107,47);
    fill("black");
    ellipse(50, 50, 100);
    fill("white");
    noStroke();
    strokeWeight(3);

}

var ballSpeedx = 9;
var ballSpeedy = 6;
var posX = 400; 
var posY = 400;
 
function draw(){
    background(85,107,47);
    ellipse(posX,posY,100);
    //ball
    posX = posX + ballSpeedx;
    posY = posY + ballSpeedy;
    
    //variables
    
    if(posX <= 50 || posX >= width-50){
        ballSpeedx = (-ballSpeedx);
    }
    if (posY <= 50 || posY >= height-50) {
        ballSpeedy = (-ballSpeedy);
    }
}










