function computerPlay() {
	const arr = ['🤛', '🖐', '✌️'];
	return arr[Math.floor(Math.random() * arr.length)];
}

function round(computerPlay, playersChoice) {
	if (
		computerPlay === playersChoice ||
		(computerPlay === '🤛' && playersChoice === '🤜')
	)
		return 'draw';

	if (
		(computerPlay === '🤛' && playersChoice === '🖐') ||
		(computerPlay === '🖐' && playersChoice === '✌️') ||
		(computerPlay === '✌️' && playersChoice === '🤜')
	)
		return 'win';

	if (
		(computerPlay === '🤛' && playersChoice === '✌️') ||
		(computerPlay === '🖐' && playersChoice === '🤜') ||
		(computerPlay === '✌️' && playersChoice === '🖐')
	)
		return 'lose';
}

const playBtn = document.querySelector('.play');
playBtn.addEventListener('click', () => {
	document.body.classList.add('game');
	document.querySelector('h1').classList.add('top');
	document.querySelector('#start').style.display = 'none';
	document.querySelector('.container').style.display = 'flex';
	document.querySelector('.round').style.display = 'flex';
	document.querySelector('#result').style.display = 'flex';
});

const choices = document.querySelectorAll('.choices');
const computerChoice = document.querySelector('#computer');
const playerChoice = document.querySelector('#player');
const roundText = document.querySelector('.round');
const gameResult = document.querySelector('.game-result');
const textResult = document.querySelector('.text-result');
const restart = document.querySelector('#restart');
const labelYou = document.querySelector('.player-choice h4');
const labelComp = document.querySelector('.computer h4');

let playerScore = 0;
let compScore = 0;
let roundNum = 0;
choices.forEach((choice) =>
	choice.addEventListener('click', (e) => {
		document.querySelector('#intro').style.display = 'none';
		labelYou.innerText = 'You';
		labelComp.innerText = 'Computer';
		const play = e.target.innerText;
		const compPlay = computerPlay();
		computerChoice.innerText = compPlay;
		playerChoice.innerText = play;
		const oneRound = round(compPlay, play);

		roundNum++;
		roundText.innerText = `Round ${roundNum}`;
		const roundResult = document.querySelector(`#round-${roundNum}`);

		if (oneRound === 'win') {
			playerScore++;
			roundResult.classList.add('win');
			roundResult.innerText = '👍';
		}
		if (oneRound === 'lose') {
			compScore++;
			roundResult.classList.add('lose');
			roundResult.innerText = '👎';
		}
		if (oneRound === 'draw') {
			roundResult.classList.add('draw');
			roundResult.innerText = '🤝';
		}

		if (
			playerScore === 3 ||
			(roundNum === 5 && playerScore > compScore) ||
			(roundNum === 4 && playerScore === 2 && compScore === 0)
		) {
			gameResult.style.display = 'flex';
			textResult.textContent = 'Congratulations, you won! 😻';
		} else if (
			compScore === 3 ||
			(roundNum === 5 && playerScore < compScore) ||
			(roundNum === 4 && playerScore === 0 && compScore === 2)
		) {
			gameResult.style.display = 'flex';
			textResult.textContent = "I'm sorry, you lost! 😿";
		} else if (roundNum === 5 && playerScore === compScore) {
			gameResult.style.display = 'flex';
			textResult.textContent = "It's a draw. Friendship wins! 😸";
		}
	})
);

restart.addEventListener('click', () => {
	roundNum = 0;
	compScore = 0;
	playerScore = 0;
	roundText.innerText = '';
	document.querySelectorAll('.result').forEach((item) => {
		item.classList.remove('draw', 'win', 'lose');
		item.innerText = '';
	});
	playerChoice.innerText = '';
	computerChoice.innerText = '';
	labelYou.innerText = '';
	labelComp.innerText = '';
	gameResult.style.display = 'none';
	document.querySelector('#intro').style.display = 'block';
});
