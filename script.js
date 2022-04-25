function computerPlay() {
	const arr = ['🤛', '🖐', '✌️'];
	return arr[Math.floor(Math.random() * arr.length)];
}

function consoleStyle(font, bg) {
	return `font-size:${font}px; background-color:${bg}; color:white; padding:12px; border-radius:50px`;
}

function round(computerPlay, playersChoice) {
	if (computerPlay === playersChoice) {
		console.log('%cDraw!', `${consoleStyle(12, 'dimgray')}`);
		return 3;
	}

	if (
		(computerPlay === '🤛' && playersChoice === '🖐') ||
		(computerPlay === '🖐' && playersChoice === '✌️') ||
		(computerPlay === '✌️' && playersChoice === '🤜')
	) {
		console.log(
			`%cYou win! ${playersChoice} beats ${computerPlay}`,
			`${consoleStyle(12, '#417a41')}`
		);
		return 1;
	}

	if (
		(computerPlay === '🤛' && playersChoice === '✌️') ||
		(computerPlay === '🖐' && playersChoice === '🤜') ||
		(computerPlay === '✌️' && playersChoice === '🖐')
	) {
		console.log(
			`%cYou lose! ${computerPlay} beats ${playersChoice}`,
			`${consoleStyle(12, '#dc546f')}`
		);
		return 2;
	}
}

// function game() {
// 	console.log('%cNew game!', `${consoleStyle(30, '#333')}`);

// 	let points = 0;
// 	for (let i = 0; i < 5; i++) {
// 		let computer = computerPlay();
// 		let player = prompt('Choose: Rock, Paper or Scissors');
// 		if (player === null) {
// 			alert('Canceled! Press Play to try again!');
// 			return;
// 		}
// 		player = player[0].toUpperCase() + player.slice(1).toLowerCase();
// 		console.log(`%cRound ${i + 1}!`, 'font-size:15px; ');
// 		let score = round(computer, player);
// 		if (score === 0) i--;
// 		else if (score === 1) points++;
// 		else if (score === 2) points--;
// 	}
// 	if (points === 0)
// 		console.log("%cIt's a Draw!", `${consoleStyle(20, '#494949')}`);
// 	if (points > 0)
// 		console.log(
// 			'%cCongratulation, you won!',
// 			`${consoleStyle(20, 'darkgreen')}`
// 		);
// 	if (points < 0)
// 		console.log("%cI'm sorry, you lost!", `${consoleStyle(20, 'crimson')}`);
// }

const playBtn = document.querySelector('.play');
playBtn.addEventListener('click', () => {
	playBtn.classList.add('hide');
	document.body.classList.add('game');
	document.querySelector('h1').classList.add('top');
	document.querySelector('#start').style.display = 'none';
	document.querySelector('.container').style.display = 'flex';
	document.querySelector('.round').style.display = 'flex';
});

const choices = document.querySelectorAll('.choices');
const computerChoice = document.querySelector('#computer');
const playerChoice = document.querySelector('#player');
const roundText = document.querySelector('.round');
choices.forEach((choice) =>
	choice.addEventListener('click', (e) => {
		const play = e.target.innerText;
		const compPlay = computerPlay();
		computerChoice.innerText = compPlay;
		playerChoice.innerText = play;
		const oneRound = round(compPlay, play);
	})
);
