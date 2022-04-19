function computerPlay() {
	const arr = ['Rock', 'Paper', 'Scissors'];
	return arr[Math.floor(Math.random() * arr.length)];
}

function consoleStyle(font, bg) {
	return `font-size:${font}px; background-color:${bg}; color:white; padding:12px; border-radius:50px`;
}

function round(computerPlay, playersChoice) {
	console.log(`Computer: ${computerPlay}`);
	console.log(`Player: ${playersChoice}`);
	if (computerPlay === playersChoice) {
		console.log('%cDraw!', `${consoleStyle(12, 'dimgray')}`);
		return 3;
	}

	if (
		(computerPlay === 'Rock' && playersChoice === 'Paper') ||
		(computerPlay === 'Paper' && playersChoice === 'Scissors') ||
		(computerPlay === 'Scissors' && playersChoice === 'Rock')
	) {
		console.log(
			`%cYou win! ${playersChoice} beats ${computerPlay}`,
			`${consoleStyle(12, '#417a41')}`
		);
		return 1;
	}

	if (
		(computerPlay === 'Rock' && playersChoice === 'Scissors') ||
		(computerPlay === 'Paper' && playersChoice === 'Rock') ||
		(computerPlay === 'Scissors' && playersChoice === 'Paper')
	) {
		console.log(
			`%cYou lose! ${computerPlay} beats ${playersChoice}`,
			`${consoleStyle(12, '#dc546f')}`
		);
		return 2;
	}

	console.log(
		'%cWrong word! Choose Rock, Paper or Scissors',
		`${consoleStyle(12, 'sienna')}`
	);
	return 0;
}

function game() {
	console.log('%cNew game!', `${consoleStyle(30, '#333')}`);

	let points = 0;
	for (let i = 0; i < 5; i++) {
		let computer = computerPlay();
		let player = prompt('Choose: Rock, Paper or Scissors');
		if (player === null) {
			alert('Canceled! Press Play to try again!');
			return;
		}
		player = player[0].toUpperCase() + player.slice(1).toLowerCase();
		console.log(`%cRound ${i + 1}!`, 'font-size:15px; ');
		let score = round(computer, player);
		if (score === 0) i--;
		else if (score === 1) points++;
		else if (score === 2) points--;
	}
	if (points === 0)
		console.log("%cIt's a Draw!", `${consoleStyle(20, '#494949')}`);
	if (points > 0)
		console.log(
			'%cCongratulation, you won!',
			`${consoleStyle(20, 'darkgreen')}`
		);
	if (points < 0)
		console.log("%cI'm sorry, you lost!", `${consoleStyle(20, 'crimson')}`);
}

const playBtn = document.querySelector('.play');
playBtn.addEventListener('click', game);
