function computerPlay() {
	const arr = ['rock', 'paper', 'scissors'];
	return arr[Math.floor(Math.random() * arr.length)];
}

function round(computerPlay, playersChoice) {
	console.log(`Computer: ${computerPlay}, Player: ${playersChoice}.`);
	if (computerPlay === playersChoice) {
		console.log(
			'%c Draw!',
			'font-size:12px; background-color:blueviolet; color:white; padding:8px; border-radius:50px'
		);
		return 3;
	}
	if (computerPlay === 'rock' && playersChoice === 'paper') {
		console.log(
			'%c You win! Paper beats Rock',
			'font-size:12px; background-color:darkgreen; color:white; padding:8px; border-radius:50px'
		);
		return 1;
	}
	if (computerPlay === 'rock' && playersChoice === 'scissors') {
		console.log(
			'%c You lose! Rock beats Scissors',
			'font-size:12px; background-color:crimson; color:white; padding:8px; border-radius:50px'
		);
		return 2;
	}
	if (computerPlay === 'paper' && playersChoice === 'scissors') {
		console.log(
			'%c You win! Scissors beats Paper',
			'font-size:12px; background-color:darkgreen; color:white; padding:8px; border-radius:50px'
		);
		return 1;
	}

	if (computerPlay === 'paper' && playersChoice === 'rock') {
		console.log(
			'%c You lose! Paper beats Rock',
			'font-size:12px; background-color:crimson; color:white; padding:8px; border-radius:50px'
		);
		return 2;
	}

	if (computerPlay === 'scissors' && playersChoice === 'paper') {
		console.log(
			'%c You lose! Scissors beats Paper',
			'font-size:12px; background-color:crimson; color:white; padding:8px; border-radius:50px'
		);
		return 2;
	}
	if (computerPlay === 'scissors' && playersChoice === 'rock') {
		console.log(
			'%c You win! Rock beats Scissors',
			'font-size:12px; background-color:darkgreen; color:white; padding:8px; border-radius:50px'
		);
		return 1;
	}

	console.log(
		'%c Wrong word! Choose Rock, Paper or Scissors',
		'font-size:12px; background-color:sienna; color:white; padding:8px; border-radius:50px'
	);
	return 0;
}

function game() {
	console.log(
		'%c New game!',
		'font-size:30px; background-color:#333; color:white; padding:8px 16px; border-radius:50px'
	);

	let points = 0;
	for (let i = 0; i < 5; i++) {
		let computer = computerPlay();
		let player = prompt('Choose: Rock, Paper or Scissors').toLowerCase();
		console.log(
			`%c Round #${i + 1}!`,
			'font-size:15px; background-color:sienna; color:white; padding:8px; border-radius:50px'
		);
		let score = round(computer, player);
		if (score === 0) i--;
		else if (score === 1) points++;
		else if (score === 2) points--;
	}
	if (points === 0)
		console.log(
			"%c It's a Draw!",
			'font-size:15px; background-color:blueviolet; color:white; padding:8px; border-radius:50px'
		);
	if (points > 0)
		console.log(
			'%c Congratulation, you won!',
			'font-size:15px; background-color:darkgreen; color:white; padding:8px; border-radius:50px'
		);
	if (points < 0)
		console.log(
			"%c I'm sorry, you lost!",
			'font-size:15px; background-color:crimson; color:white; padding:8px; border-radius:50px'
		);
}

const playBtn = document.querySelector('.play');
playBtn.addEventListener('click', game);
