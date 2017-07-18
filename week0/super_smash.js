var mashArray = ["Battlefield", "Final Destination", "Delfino Plaza", "Mario Circuit"];
var firstQuestion = [1, 2]
var secondQuestion = ["Meta Knight", "Kirby" ]
var prompt = require('prompt-sync')();
// 
// get input f.rom the user. 
// var n = prompt("How many times will you strike?");
function askUser(){
    var times = prompt("how many times will you strike?"); 
    var enemy = prompt("who will you choose to fight?"); 
    console.log("I will strike " + enemy +  times + "times");
    firstQuestion.push(times); 
    secondQuestion.push(enemy);
}

askUser();
