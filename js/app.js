// console.log("working")

const words = ['hello', 'potato', 'seven', 'tree', 'apple'];

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
			// console.log(arra`yToCheck)	
		}
		if(!arrayToCheck.includes(true)){
			this.winMessage()
		}
		// Check if game has been lost
		else if(this.guesses <= 0){
			this.loseMessage()
		}
		else {
			currentGame.render()
		}
	},
	winMessage() {
		//If game has been won return "You Win"
		alert("Congrats, you Win")
		return
		
	},
	loseMessage() {
		//If game has been lost return "You Lose"
		alert("You lose, try again")
		return
		
	}
};


class Letter {
	constructor(value, hidden){
		this.value = value;
		this.hidden = true;
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
	test(letter) {
		// Go through letter array and update any hidden values that match this input
		console.log(game.guessedLetters + " have been guessed.")
		//prompt the user to guess a letter
		let letterToTest = prompt("Guess a letter")

		// check to to see if the letter has been guessed previously, if so start test() over
		if (game.guessedLetters.includes(letterToTest)) {
			this.test()
		}
		else {
			
			//for new guesses push the guessed letter to the guessedLetters array and remove 1 from guesses counter
			game.guessedLetters.push(letterToTest);
			game.guesses -= 1;
			console.log(game.guesses + " guesses remaining")
			// console.log(letterToTest)
			// console.log(game.guessedLetters)
			// console.log(currentGame.letters)
			


			//check to see if the letter matches any of the letters in the word
			for(let i = 0; i < currentGame.letters.length; i++){
				if (currentGame.letters[i]['value'] === letterToTest){
					currentGame.letters[i]['hidden'] = false
				}
				else{
					// console.log("not a letter")
				}
			}
		}
		game.isOver()
	}
	render() {
		// Return the word showing either the unhidden letters (if guessed) or a _ if hidden
		// Loop through the letter array and return the value for objects with false hidden values and the letter value for objects with true hidden values
		let display = []
		for(let i = 0; i < currentGame.letters.length; i++){
			if (currentGame.letters[i]["hidden"] === true) {
				display.push("_")
			} else {
				display.push(currentGame.letters[i]['value'])
			}
		}
		console.log(display)
		currentGame.test()
	}
}



function startGame() {
	game.guesses = 10;
	game.guessedLetters = [];
	currentWord = chooseWord();
	currentGame = new Words;
	currentGame.getLetters(currentWord);
	currentGame.render();
	currentGame.test();
	// game.isOver();
}













