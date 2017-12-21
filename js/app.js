// console.log("working")

const words = ['hello', 'potato', 'seven', 'tree', 'apple'];





function startGame() {
	game.guesses = 10;
	game.guessedLetters = [];
	currentWord = chooseWord();
	currentGame = new Words;
	currentGame.getLetters(currentWord);
	playGame();
}

function playGame() {

}


function chooseWord() {
	return words[Math.floor(Math.random()*words.length)]
}

const game = {
	//guesses remaining
	guesses: 0,
	//guessed letters
	guessedLetters: ['a','b','c'],
	isOver() {
		// Check if game has been won
		// Create an array of currentGame[i].hidden
		let arrayToCheck = []
		for(i = 0; i < currentGame.letters.length; i++){
			arrayToCheck.push(currentGame.letters[i]['hidden']);
			console.log(arrayToCheck)	
		}
		console.log((arrayToCheck.includes(false)))
		

		// Check if game has been lost
		// else if( guesses <= 0){
			// return console.log("You have run out of guesses, You Lose")
		// }
		// else {
		// if neither do this
			//Play another round
	},
	overMessage() {
		//If game has been won return "You Win"

		//If game has been lost return "You Lose"
	}
};


class Letter {
	constructor(value, hidden){
		this.value = value;
		this.hidden = true;
	}
	show() {
		// Take a letter and change the value of hidden to false
	}
	display() {
		//If the value if the letter is not hidden

		//Return a _ if the letter is hidden
	}
}


class Words {
	constructor(newWord, letters){
		this.letters = [];
	}
	getLetters(newWord) {
		for(let i = 0; i < newWord.length; i++){
			let char = new Letter(newWord[i]);
			this.letters.push(char);
		}
	}
	isFound() {
		// If true call game.overMessage()

		//Otherwise return false
	}
	test(letter) {
		//Go through letter array and update any hidden values that match this input
	}
	render() {
		// Return the word showing either the unhidden letters (if guessed) or a _ if hidden
	}
}












