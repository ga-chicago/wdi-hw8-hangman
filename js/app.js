// console.log("working")

const words = ['hello', 'potato', 'seven', 'tree', 'apple'];

function chooseWord() {
	let chosenWord = words[Math.floor(Math.random()*words.length)]
	return chosenWord
}


// const game = {
// 	//guesses remaining
// 	guesses: 10,
// 	//guessed letter
// 	gussedLetters: [],
// 	isOver() {
// 		// Check if game has been won

// 		//Check if game has been lost

// 		//if neither do this


// 	},
// 	overMessage() {
// 		//If game has been won return "You Win"

// 		//If game has been lost return "You Lose"
// 	}
// };


// class Letter {
// 	constructor(value, hidden){
// 		this.value = value;
// 		this.hidden = true;
// 	}
// 	show() {
// 		// Take a letter and change the value of hidden to false
// 	}
// 	display() {
// 		//If the value if the letter is not hidden

// 		//Return a _ if the letter is hidden
// 	}
// }


// class Words {
// 	constructor(newWord, letters){
// 		this.letters = [];
// 	}
// 	getLetters(newWord) {
// 		for(i = 0; i < newWord.length; i++){
// 			let char = new Letter(newWord[i]);
// 			this.letters.push(char);
// 		}
// 	}
// 	isFound() {
// 		// If true call game.overMessage()

// 		//Otherwise return false
// 	}
// 	test(letter) {
// 		//Go through letter array and update any hidden values that match this input
// 	}
// 	render() {
// 		// Return the word showing either the unhidden letters (if guessed) or a _ if hidden
// 	}
// }








chooseWord()



