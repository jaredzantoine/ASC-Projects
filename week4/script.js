
function userChoice(num) {
    var choice = parseInt(num); 
    if(choice == 1 ){
        alert("user selected Rock");
    }else if ( choice == 2 ){
        alert("user selected Paper"); 
    }else if(choice == 3){
        alert("user selected Scissors"); 
    }
}

/*
function game(num){
   userChoice = choices[num];
   enemyChoice = choices[Math.floor(Math.random()*choices.length)];

   if (userChoice == enemyChoice){
       console.log("Go Again!");
   
    }else if (userChoice == "Paper" && enemyChoice == "Rock"){
       console.log("The opponent picked Rock, you won!");
   
    }else if (userChoice == "Paper" && enemyChoice == "Scissors"){
       console.log("The opponent picked scissors, you lost!");
   
    }else if (userChoice == "Rock" && enemyChoice == "Scissors"){
       console.log("The opponent picked Scissors, you won!");
   
    }else if (userChoice == "Rock" && enemyChoice == "Paper"){
       console.log("The opponent picked paper, you lost");
   
    }else if (userChoice == "Paper" && enemyChoice == "Rock"){
       console.log("The opponent rock, you won! ")
   
    }else if (userChoice == "Paper" && enemyChoice == "Scissors"){
       console.log("The opponent picked scissors, you lost!");
   }

}
*/
/*
function userChoice(num){
enemyChoice = choices[Math.floor(Math.random()*choices.length)];

if (Choice == enemyChoice){
    console.log("Go Again!");
}
else if (Choice == 1 && enemyChoice == 2){
    console.log("Opponent picked Paper, you lose!");

}else if(Choice == 2 && enemyChoice == 1){
        console.log("Opponent picked Rock, you won!");

}else if(Choice == 3 && enemyChoice == 2){
    console.log("Opponent picked Rock, you lose!");
}
}
*/