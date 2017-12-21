console.log('linked');


const hangman = function() {
	//declaring properties 
	const inputField = document.getElementById('input-guess');
	const checkButton = document.getElementById('check-guess');
	const guessesLeft = document.getElementById('guesses-left');
	const lettersTried = document.getElementById('letters-guessed');
	const currentProgress = document.getElementById('current-progress');

	//a game object containing the rules, constraints, and logic for Hangman
	const hangmanGame = {
		words: ['NORMAL',
				'DECIDE',
				'IGNITE',
				'LINGER',
				'STITCH',
				'STRESS',
				'GALLON',
				'SALMON',
				'ENGINE',
				'DESIRE'
				],
		guesses: 10,
		//an array containing all guessed letters
		lettersGuessed: [],
		//the storage property for the current word being guessed
		currentWord: {},
		//a method of the game that updates the game object properties each time a new game is started
		startGame() {
			this.guesses = 10;
			this.lettersGuessed = [];
			this.currentWord = this.newWord();
			this.currentWord.render();
			guessesLeft.innerText = 'guesses left: '+this.guesses;
			lettersTried.innerText = 'letters guessed';
			// console.log(this.currentWord);
		},
		//the method that is called each time the button is clicked. returns false if the input field is blank or the letter has already been guessed, otherwise updates the letters guessed array & field and runs the currentWord test and render functions to check for matches and update accordingly
		checkGuess() {
			let currentGuess = inputField.value;
			console.log(hangmanGame.lettersGuessed, currentGuess);
			if (inputField.value == '') {
				return false;
			}
			else if (hangmanGame.lettersGuessed.includes(currentGuess)) {
				inputField.value = '';
				return false;
			}
			else {
				let guess = inputField.value;
				inputField.value = '';
				hangmanGame.currentWord.test(guess);
				hangmanGame.currentWord.render();
				lettersTried.innerText = hangmanGame.displayGuessed()
				hangmanGame.isOver();
			}
		},
		//runs at the end of each letter guessed, checking conditionals to see whether or not the game should end, and, if so, to run the overMessage() method alerting the user of the result of the game
		isOver() {
			let checkForHidden = this.currentWord.array;
			let allShown = true;
			for (let i = 0; i < checkForHidden.length; i++) {
				if (checkForHidden[i].hidden == true) {
					allShown = false;
				}
			}
			if (this.guesses == 0 && allShown == false) {
				this.overMessage(false);
			}
			else if (this.guesses >= 0 && allShown == true) {
				this.overMessage(true);
			}
			else {
				return false;
			}
		},
		//a method that displays messages when the game concludes
		overMessage(boolean) {
			if (boolean) {
				alert(this.currentWord.word+'! You got it!');
				this.startGame();
			}
			else {
				alert('You lose.');
				this.startGame();
			}
		},
		//a method run each time a new guess is attempted that updates the html to display which letter have already been guessed and are no longer accessible
		displayGuessed() {
			let guessedLetters = '';
			for (let i = 0; i < this.lettersGuessed.length; i++) {
				if (i == this.lettersGuessed.length-1) {
					guessedLetters += this.lettersGuessed[i];
				}
				else {
					guessedLetters += this.lettersGuessed[i]+', ';
				}
			}
			return guessedLetters;
		},
		//a method that is run at the start of each new game. creates a new Word class object and assigns it to the currentWord property of the game object for use in referencing it throughout the game
		newWord() {
			let guessIt = new Word(this.chooseWord());
			guessIt.createLetters(guessIt.word);
			return guessIt;
		},
		//a method that randomly selects a word in the words array property of the game object
		chooseWord() {
			let arrIndex = Math.floor(Math.random()*this.words.length);
			return this.words[arrIndex];
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
			//decrements the number of remaining guesses and updates the html *********** PROBABLY WANT TO MOVE THIS LOGIC SOMEWHERE ELSE BUT FOR NOW IS OK *************
			hangmanGame.guesses--;
			guessesLeft.innerText = 'guesses left: '+hangmanGame.guesses;
			hangmanGame.lettersGuessed.push(str);
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
			currentProgress.innerText = showProgess;
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


	//added a function to bind event listeners to properties
	const bindEvents = function() {
		checkButton.addEventListener('click', hangmanGame.checkGuess)
		console.log('bound!');
	}

	bindEvents();
	hangmanGame.startGame();
}
hangman();

































