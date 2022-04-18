// computer play function
function computerPlay() {
	const arr = ['rock', 'paper', 'scissors'];
	return arr[Math.floor(Math.random() * arr.length)];
}
// function returns randomly rock paper or scissors
// single round function
function round(computerPlay, playersChoice) {
	console.log(`Computer: ${computerPlay}, Player: ${playersChoice}`);
	if (computerPlay === playersChoice) {
		console.log('draw');
		return 3;
	}
	if (computerPlay === 'rock' && playersChoice === 'paper') {
		console.log('You win! Paper beats Rock');
		return 1;
	}
	if (computerPlay === 'rock' && playersChoice === 'scissors') {
		console.log('You lose! Rock beats Scissors');
		return 2;
	}
	if (computerPlay === 'paper' && playersChoice === 'scissors') {
		console.log('You win! Scissors beats Paper');
		return 1;
	}

	if (computerPlay === 'paper' && playersChoice === 'rock') {
		console.log('You lose! Paper beats Rock');
		return 2;
	}

	if (computerPlay === 'scissors' && playersChoice === 'paper') {
		console.log('You lose! Scissors beats Paper');
		return 2;
	}
	if (computerPlay === 'scissors' && playersChoice === 'rock') {
		console.log('You win! Rock beats Scissors');
		return 1;
	}

	console.log('Wrong word! Choose Rock, Paper or Scissors');
	return 0;
}
// takes 2 parameters: playerSelection and computerSelection
// return string that declares a winner
// make player's choice case-insensitive

// game function
function game() {
	let points = 0;
	for (let i = 0; i < 5; i++) {
		let computer = computerPlay();
		let player = prompt('Choose: Rock, Paper or Scissors').toLowerCase();
		console.log(`Round #${i + 1}!`);
		let score = round(computer, player);
		if (score === 0) i--;
		else if (score === 1) points++;
		else if (score === 2) points--;
	}
	console.log(points);
}
game();
// treks wins and loses in a 5 round game
// use prompt to take user input
