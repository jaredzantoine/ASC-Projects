$(document).ready(setup);

var hp = 100;
var gold = 0;
var slain = 0;

function setup(){
    $("body").append("<h1>Welcome to Ogre Fighter v1.0</h1>");
    $("body").append("<p>Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.");
    $("body").append("<h2>STATS</h2>");
    $("body").append("<div class='stats'></div>");
    $("body").append("<button onclick='attack()'>Attack the Ogre!</button>");
    $("body").append("<div class= 'ogres'></div>");
}

function stats(){
    $(".stats").text("HP: + "+hp+" // Gold: "+gold+" // Ogres Slain: "+slain);
}

function attack(){
    //conditonal to see if you kill ogre or not
    //if you win, +10, +1 slain, if you lose, -1 gold, -1 HP 
    if(hp>0){//Player is still alive
        if(Math.random()*100 > gold){//player wins!
            gold = gold +10;
            slain = slain + 1; 
            $(".ogres").prepend("<p>You Won! + 10 gold.</p>");
        }else {
            //player loses :( 
                gold = gold -1; 
                hp = hp - 1;
                $(".ogres").prepend("<p>You Lost! -1 gold, -1 HP.</p>"); 

        }
    }else {
        $(".orges").prepend("<h3>You died!!!</h3>");
    }
    stats();
    
}

//Variables: (HP,gold,slain)
//display stats header
//display stats variables
//display a button that refers to a function that attacks an ogre
//display an ogre
//function for attacking an ogre
//return values: either win or lose ! 
// If you win, you gain 10 gold, if you lose you lose 1 gold. 
//regardless, a picture is added below...