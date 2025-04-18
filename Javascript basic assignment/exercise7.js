//Guess the Number Game
let randomNumber = 
Math.floor(Math.random() *5) + 1;
let guess =
parseInt(prompt("Guess a number between 1 and 5"));
if (guess === randomNumber) {#
    alert("You are right!");
} else {
    alert('Wrong guess, The number was ${randomNumber}');
}

//Sample Output
//First ans:
//Prompt:Guess a number between 1 and 5
//User input:2
//Alert: You are right! (if the random nunmber generated is 2)
//Second ans:
//Prompt:Guess a number between 1 and 5
//User input:2
//Alert: Wrong guess, The number was 3 (if the random nunmber generated is 3)
