let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");

function getComputerChoice() {
	const choices = ['r', 'p', 's', 'l', 'k'];
	const randomNumber = Math.floor(Math.random() * 5);
	return choices[randomNumber];
}

function convert(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	if (letter === "s") return "Scissors";
	if (letter === "l") return "Lizard";
	return "Spock";
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}.${smallCompWord} You win!`
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')})
}

function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convert(userChoice)}${smallUserWord} loses to ${convert(computerChoice)}.${smallCompWord} You lost!`
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')})
}

function draw(userChoice, computerChoice) {
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convert(userChoice)}${smallUserWord} ties with ${convert(computerChoice)}.${smallCompWord} You draw!`
	document.getElementById(userChoice).classList.add('grey-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')})
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "rl":
		case "pr":
		case "pk":
		case "sp":
		case "sl":
		case "lk":
		case "lp":
		case "ks":
		case "kr":
			win(userChoice, computerChoice);
			break;
		case "rk":
		case "rp":
		case "ps":
		case "pl":
		case "sr":
		case "sk":
		case "lr":
		case "ls":
		case "kp":
		case "kl":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
		case "ll":
		case "kk":
			draw(userChoice, computerChoice);
			break;
	}	
}

function main() {
	rock_div.addEventListener('click', function() {
	game("r")
	})

	paper_div.addEventListener('click', function() {
	game("p")
	})

	scissors_div.addEventListener('click', function() {
	game("s")
	})

	lizard_div.addEventListener('click', function() {
	game("l")
	})

	spock_div.addEventListener('click', function() {
	game("k")
	})
}

	main();






