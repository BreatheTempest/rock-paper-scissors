function computerPlay() {
	const arr = ['Rock', 'Paper', 'Scissors'];
	return arr[Math.floor(Math.random() * arr.length)];
}

function round(computerPlay, playersChoice) {
	console.log(`Computer: ${computerPlay}`);
	console.log(`Player: ${playersChoice}`);
	if (computerPlay === playersChoice) {
		console.log(
			'%cDraw!',
			'font-size:12px; background-color:dimgray; color:white; padding:8px; border-radius:50px'
		);
		return 3;
	}
	if (computerPlay === 'Rock' && playersChoice === 'Paper') {
		console.log(
			'%cYou win! Paper beats Rock',
			'font-size:12px; background-color:#417a41; color:white; padding:8px; border-radius:50px'
		);
		return 1;
	}
	if (computerPlay === 'Rock' && playersChoice === 'Scissors') {
		console.log(
			'%cYou lose! Rock beats Scissors',
			'font-size:12px; background-color:#dc546f; color:white; padding:8px; border-radius:50px'
		);
		return 2;
	}
	if (computerPlay === 'Paper' && playersChoice === 'Scissors') {
		console.log(
			'%cYou win! Scissors beats Paper',
			'font-size:12px; background-color:#417a41; color:white; padding:8px; border-radius:50px'
		);
		return 1;
	}

	if (computerPlay === 'Paper' && playersChoice === 'Rock') {
		console.log(
			'%cYou lose! Paper beats Rock',
			'font-size:12px; background-color:#dc546f; color:white; padding:8px; border-radius:50px'
		);
		return 2;
	}

	if (computerPlay === 'Scissors' && playersChoice === 'Paper') {
		console.log(
			'%cYou lose! Scissors beats Paper',
			'font-size:12px; background-color:#dc546f; color:white; padding:8px; border-radius:50px'
		);
		return 2;
	}
	if (computerPlay === 'Scissors' && playersChoice === 'Rock') {
		console.log(
			'%cYou win! Rock beats Scissors',
			'font-size:12px; background-color:#417a41; color:white; padding:8px; border-radius:50px'
		);
		return 1;
	}

	console.log(
		'%cWrong word! Choose Rock, Paper or Scissors',
		'font-size:12px; background-color:sienna; color:white; padding:8px; border-radius:50px'
	);
	return 0;
}

function game() {
	console.log(
		'%cNew game!',
		'font-size:30px; background-color:#333; color:white; padding:8px 16px; border-radius:50px;'
	);

	let points = 0;
	for (let i = 0; i < 5; i++) {
		let computer = computerPlay();
		let player = prompt('Choose: Rock, Paper or Scissors');
		if (player === null) {
			alert('Canceled! Press Play to try again!');
			return;
		}
		player = player[0].toUpperCase() + player.slice(1).toLowerCase();
		console.log(player);
		console.log(`%cRound #${i + 1}!`, 'font-size:15px; ');
		let score = round(computer, player);
		if (score === 0) i--;
		else if (score === 1) points++;
		else if (score === 2) points--;
	}
	if (points === 0)
		console.log(
			"%cIt's a Draw!",
			'font-size:20px; background-color:#494949; color:white; padding:16px; border-radius:50px; text-align:center'
		);
	if (points > 0)
		console.log(
			'%cCongratulation, you won!',
			'font-size:20px; background-color:darkgreen; color:white; padding:16px; border-radius:50px; text-align:center'
		);
	if (points < 0)
		console.log(
			"%cI'm sorry, you lost!",
			'font-size:20px; background-color:crimson; color:white; padding:16px; border-radius:50px; text-align:center'
		);
}

const playBtn = document.querySelector('.play');
playBtn.addEventListener('click', game);
