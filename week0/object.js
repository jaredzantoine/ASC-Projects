var charizard = {"attack" : "Blaze",
"HP" : 266 , 
"legendary" :false,
 "types" : "Fire, flying"
};

// Class/ Object Construction

function Superhero(realName){
    this.realName = realName
}

//creating an instance of the super hero class

var superman = new Superhero('Clark Kent');
var batman = new Superhero('Bruce Wayne');

/*
we want to add:
-sidekick
-race
-gender
-hideout
-arch nemesis
-what universe? 
*/
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
//creating an instance of the superhero class
var superman = new Superhero('Clark Kent', 'heat vision', false,
                            'Kryptonian', 'Male', 'Metrop.olis',
                            'Lex Luther', "DC");
 var ironman = new Superhero('Tony Stark', 'iron suit', 'false',
                             'Caucasion', 'Male', 'Manhattan'
                             'false', 'Marvel')

// 

function Pizza(Suace, cheese, toppings, size){
    this.sauce = sauce
    this.cheese = cheese
    this.toppings = toppings
    this.size = size;
}

var pizza = new Pizza('tomato', 'mozzerala', ['pineapples', 'ham', 'bacon'], "xxl");
