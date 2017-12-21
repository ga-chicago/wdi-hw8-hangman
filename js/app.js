console.log('linked');


//array of words to be guessed     * will add more *
const words = ['michael'];


//a function that returns a random word from the above array
const chooseWord = () => {
	//gets random num rounded down between zero and length of words array
	let arrIndex = Math.floor(Math.random()*words.length);
	return words[arrIndex];
}

// console.log(chooseWord());


//a game object containing the rules, constraints, and logic for Hangman
const hangmanGame = {
	guesses: 10,
	lettersGuessed: [],
	//a method of the game that checks conditionals for winning, losing, or continuing to play after each round
	isOver() {
		//conditionals & code
	},
	//a funtion that displays messages when the game concludes
	overMessage() {
		//conditionals & code
	}
}


//a class for each word to be guessed. it contains methods to create Letter classes with each letter its made up of, as well as methods to check new letter guesses against existing letters and to render letters that have been revealed
class Word {
	constructor(word, array) {
		this.word = word;
		this.array = [];
	}
	createLetters(randomWord) {
		for (let i = 0; i < randomWord.length; i++) {
			let letterObj = new Letter(randomWord[i]);
			// console.log(letterObj);
			this.array.push(letterObj);
			// console.log(this.array);
		}
	}
}


//a class for each Letter of the word. this constructor is called for under a method in the Word class
class Letter {
	//properties for each letter object, the letter itself contained in a string and a hidden property that defaults to true
	constructor(letter) {
		this.letter = letter;
		this.hidden = true;
	}
	show() {
		this.hidden = false;
	}
	display() {
		if (this.hidden) {
			return '_';
		}
		else {
			return this.letter;
		}
	}
}

let boo = new Letter('l');
console.log(boo);
































