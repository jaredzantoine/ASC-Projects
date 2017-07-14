
/*
var pokemon = {"Name" : "Pikachu",
 "type" : "Electric", 
 "HP" : 35 , 
 "Def" : 40 , 
 "Atk" : 55 , 
 "Legend" : false};

var pokemon2 = {"Name" : "Mankey", 
  "type" : "fighting", 
  "HP" : 40, 
  "Def" : 35, 
  "Atk" : 80, 
  "Legend" : false};

var pokemon3 = {"Name" : "Machop", 
"type" : "fighting", 
"HP" : 90, 
"Def" : 80, 
"Atk" : 130, 
"Legend" : false};

var pokemon4 = {"Name" : "Wigglypuff", 
"Type" : "normal", 
"HP" : 140, 
"Def" : 45, 
"Atk" : 70, 
"Legend" : false};

var pokemon5 = {"Name" : "Zakrom", 
"Type" : "Electric", 
"HP" : 100, 
"Def" : 120, 
"Atk" : 150, 
"Legend" : true}; 

*/

function Pokemon(atk, def, hp, legend, name, type){
    this.atk = atk;
    this.def = def; 
    this.hp = hp; 
    this.legend = legend;
    this.name = name; 
    this.type = type; 
}

var Pikachu = new Pokemon(55, 40, 35, false, "Pikachu", "Electric");
var Mankey = new Pokemon(80, 35, 40, false, "Mankey", "Fighting");
var Machop = new Pokemon(130, 80, 90, false, "Machop", "Fighting");
var Wigglypuff = new Pokemon(70, 45, 140, false, "Wigglypuff", ["Fairy, Normal"]);
var Zakrom = new Pokemon(150, 120, 100, true, "Zakrom", "Electric");

//array for all the pokemon (objects)
var pokeArray = [Pikachu, Mankey, Machop, Wigglypuff,
            Zakrom];

//the function goes through the object

function printRoster(pokeArray){
    for(i = 0; i < pokemons.length; i++){
        console.log(pokeArray[i]);}
}
function pokemonAttacked(pokeArray){
    for(i = 0; i < pokemons.length; i++){
        console.log(pokeArray[i].HP-10);}
}

printRoster(pokeArray);