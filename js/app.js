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
	//splits up the word into individual letters and returns objects based on the Letter class then pushes them into the array property
	createLetters(randomWord) {
		for (let i = 0; i < randomWord.length; i++) {
			let letterObj = new Letter(randomWord[i]);
			// console.log(letterObj);
			this.array.push(letterObj);
			// console.log(this.array);
		}
	}
	//loops through the Letter class objects in the array property and checks if they match the guessed letter. updates boolean values of the hidden property of any objects whose letter matches that of the guessed letter and returns a boolean based on whether any match at all
	test(str) {
		let anyMatch = false;
		for (let i = 0; i < this.array.length; i++) {
			let currentObj = this.array[i];
			// console.log(currentObj);
			if (currentObj.letter == str) {
				currentObj.hidden = false;
				anyMatch = true;
			}
		}
		return anyMatch;
	}
	//function that loops through each letter object in the letter array and checks if they've been found by using the display method of each letter object, concatenating the letter itself if they have and an underscore if not, then returning that string
	render() {
		let showProgess = '';
		for (let i = 0; i < this.array.length; i++) {
			let currentObj = this.array[i];
			showProgess += currentObj.display()+' ';
		}
		return showProgess;
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

// let foo = new Letter('l');
// console.log(boo);
let bar = new Word(chooseWord());

bar.createLetters(bar.word);
bar.test('z');
console.log(bar);
console.log(bar.render());






























