function setup(){
    createCanvas(800,800);
    background(211,211,211,);{
        fill("yellow");
        noStroke();
        ellipse(100, 600, 80, 80);
    fill("black");
        textSize(28);
        textAlign(CENTER);
        text("YOU", 100, 610);
    fill("yellow");
        stroke("black");
        ellipse(35,35,60,60);
    fill("red");
        stroke("black");
        rect(70,60,300,10);
    fill("yellow");
    textSize(17);
    textAlign(LEFT);
    text("P I K A C H U", 70, 20);
    
    }{
        fill("black");
        stroke("white");
        strokeWeight(3);
        rect(0,700,450,800);
    fill("black");
    stroke("white");
    rect(450,600,700,300);
    textSize(30);
    textAlign(LEFT);
    text("Moves",600,630);
        fill("yellow");
        stroke("black");
        ellipse(35,35,60,60);
        fill("red");
    stroke("black");
    rect(70,60,300,10);
        fill("yellow");
        textSize(17);
        textAlign(LEFT);
        text("P I K A C H U", 70, 20);
      fill("green");
      stroke("black");
      ellipse(765,35,60,60);
       
       fill("red");
       stroke("black");
       rect(430,60,300,10);
       
       fill("green");
       textAlign(LEFT);
       text("C P U", 680, 20);
        
        fill("green");
        noStroke();
        ellipse(575,250,80,80);
        fill("black");
        textAlign(CENTER);
        textSize(28);
        text("CPU", 575, 255);
    
    fill("gray");
    noStroke();
    // Draw a rectangle with rounded corners, each having a radius of 20.
    rect(475, 645, 300, 30, 20);
    fill("white");
    textAlign(CENTER);
    textSize(28);
    text(pikachu.attack[0], 620, 670);
    
    fill("gray");
    noStroke();
    rect(475,680,300,30,30);
    fill("white");
    textAlign(CENTER);
    textSize(28);
    text(pikachu.attack[1], 620, 705);
    
    fill("gray");
    noStroke();
    rect(475,715,300,30,30);
    fill("white");
    textAlign(CENTER);
    textSize(28);
    text(pikachu.attack[2],620,740);

    fill("gray");
    noStroke();
    rect(475,750,300,30,30);
    fill("white");
    textAlign(CENTER);
    textSize(28);
    text(pikachu.attack[3], 620, 775);
}}

function Pokemon(name, HP, attack){
this.name = name
this.HP = HP 
this.attack = attack 
} 

var pikachu = new Pokemon("Pikachu", 35, ["thundershock", "thunderbolt", "leer", "agility"]);
var 




function draw(){
    fill("red");
        stroke("black");
        rect(70,60,300,10);
    fill("red");
    stroke("black");
    rect(70,60,300,10);
fill("green");
      stroke("black");
      ellipse(765,35,60,60);
fill("red");
       stroke("black");
       rect(430,60,300,10);
}


