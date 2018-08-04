const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs";
		case "rl";
		case "pr";
		case "pk";
		case "sp";
		case "sl";
		case "lk";
		case "lp";
		case "ks";
		case "kr";
			console.log("USER WINS");
			break;
		case "rk";
		case "rp";
		case "ps";
		case "pl";
		case "sr";
		case "sk";
		case "lr";
		case "ls";
		case "kp";
		case "kl";
			console.log("COMPUTER WINS");
			break;
		case "rr"
		case "pp"
		case "ss"
		case "ll"
		case "kk"
			console.log("Its a draw");
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






