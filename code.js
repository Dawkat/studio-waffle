    //playcraps keyphrase that is the link to the button in the HTML file.

function playcraps()
{ 
    // var stands for variable
    // die1 is the name of the variable
    // From var to the terminator (;) is called a string
    // This means that we will have a die from 1 to 6
var die1 = Math.ceil(Math.random()*6);
var die2 = Math.ceil(Math.random()*6);

var sum = die1 + die2

    //This section is writing to specific spots

    document.getElementById("die1Dis").innerHTML = die1;
    document.getElementById("die2Dis").innerHTML = die2;
    document.getElementById("sumDis").innerHTML = sum;

    // if,else,else if are conditionals
    // if the sum is 7 or 11 you lose
    // two vertical lines mean (or)
if (sum == 7 || sum == 11){ 
    document.getElementById("resultsDis").innerHTML = "Craps - you lose";
    
}

    //This shows that the two die's are equal and it's an even number it will display DOUBLES - you win
    //(die1 % 2 == 0) this means divide die1 by 2 and is the remainder 0
else if (die1== die2 && die1 % 2 == 0){
    document.getElementById("resultDis").innerHTML = "DOUBLES - you win";
} 

    //If it isn't if or else if, it will display (You neither won nor lost). Please play again.
else{
    document.getElementById("resultDis").innerHTML = "You neither won nor lost. Please play again.";
}


}