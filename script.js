// computer play function
function computerPlay() {
	const arr = ['rock', 'paper', 'scissors'];
	return arr[Math.floor(Math.random() * arr.length)];
}
// function returns randomly rock paper or scissors
const playersChoice = prompt('Choose: Rock, Paper or Scissors').toLowerCase();
// single round function
function round(computerPlay, playersChoice) {
	console.log(computerPlay, playersChoice);
	if (computerPlay === playersChoice) return 'draw';
	if (computerPlay === 'rock' && playersChoice === 'paper')
		return 'You win! Paper beats Rock';
	if (computerPlay === 'rock' && playersChoice === 'scissors')
		return 'You lose! Rock beats Scissors';
	if (computerPlay === 'paper' && playersChoice === 'scissors')
		return 'You win! Scissors beats Paper';
	if (computerPlay === 'paper' && playersChoice === 'rock')
		return 'You lose! Paper beats Rock';
	if (computerPlay === 'scissors' && playersChoice === 'paper')
		return 'You lose! Scissors beats Paper';
	if (computerPlay === 'scissors' && playersChoice === 'rock')
		return 'You win! Rock beats Scissors';
}
console.log(round(computerPlay(), playersChoice));
// takes 2 parameters: playerSelection and computerSelection
// return string that declares a winner
// make player's choice case-insensitive

// game function
// treks wins and loses in a 5 round game
// use prompt to take user input
