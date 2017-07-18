var charizard = {"attack" : "Blaze",
"HP" : 266 , 
"legendary" :false,
 "types" : "Fire, flying"
};

// Class/ Object Construction

function Superhero(realName){
    this.realName = realName
}

var superman = new Superhero('Clark Kent');
var batman = new Superhero('Bruce Wayne');

function Superhero(realName, power, sidekick, race, gender, hideout, nemesis, universe){
    this.realName = realName;
    this.power = power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.nemesis = nemesis; 
    this.universe = universe; 

  this.talk = function(){
    console.log("Hi my name is" + realName);
    }
}

return this.talk;

  




