// console.log("hello world")

// 1. Research the `Math.random()` method to learn how to generate a random number. The number should be between 1-50.
// 2. Give a user a prompt to guess the random number. NOTE: You will need to keep track of the number of guesses a user has used.
// 3. Use if/else and truthy/falsy concepts to evaluate whether or not the user's guess was correct.
// 4. NOTE: If a user's guess is incorrect, respond with a prompt letting them know whether or not their guess was too high or too low and how many chances remain.
// 5. If a user guesses within three chances, display an alert letting the user know they've won and what the number was.
// 6. If a user loses, display an alert letting the user know they have lost and reveal the number.

//Generate Random Number Between 1-50
let randomNumber = Math.floor(Math.random() * 50) + 1;

//Prompt for Name
let playerName = prompt("Hey! What's Your Name?");
console.log("The player's name", playerName);


//Player has 3 Guesses
let playerGuesses = 3; 

//Indicates Each Guess for Player
let Guess1, Guess2, Guess3;

//Game Begins by Having Player Pick a Number
let guessStart = Number(prompt("Hey " + playerName + ", play to win by guessing a number between 1-50!"));


if (guessStart === 3) {
    alert("Yayy " + playerName + " you did it! That was the correct answer!");
       
} else if (guessStart > randomNumber) {
    alert("Ohh nooo, that's too HIGH " + playerName + " you have 2 guesses left!"); 
    playerGuesses--;
} else if (guessStart < randomNumber) {
    alert("Yikes, that was too LOW " + playerName + " you have 1 guess left!");
    playerGuesses--;
    
}

