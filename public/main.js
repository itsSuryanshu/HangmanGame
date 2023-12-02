const { hangmanStages } = require("./hangmanStages.js");
const { getRandomWord } = require("./word.js");
const prompt = require("prompt-sync")();
const colors = require("colors/safe");

class Game {
  #word;
  hiddenWord;
  #lives = 7;
  #win = false;
  forceQuit = false;

  get getWord() {
    return this.#word;
  }

  set setWord(word) {
    this.#word = word;
  }

  get getLives() {
    return this.#lives;
  }

  decrementLives() {
    this.#lives--;
  }

  get getStatus() {
    return this.#win;
  }

  toggleStatus() {
    this.#win = !this.#win;
  }

  startGame = async () => {
    let word = await getRandomWord();
    this.setWord = word;
    //this.#word = "call";
    this.hiddenWord = "_".repeat(this.getWord.length);

    //print out the instructions
    this.printInstructions();

    let guesses = [];
    const stage = new hangmanStages();

    //print out the stage and lives (set up the game console UI)
    while (
      this.getLives > 0 &&
      this.getStatus === false &&
      this.forceQuit === false
    ) {
      console.log(`\n== WORD: ${this.hiddenWord} ==`);
      console.log(`Lives: ${this.getLives}`);
      this.game(stage, guesses);
    }

    //end the game properly
    if (!this.getStatus) {
      if (this.forceQuit) {
        return;
      } else {
        this.endGame();
      }
    }
  };

  endGame = (manual = false) => {
    if (!this.getStatus && manual) {
      console.log(colors.red("\n== Game Ended =="));
    } else if (!this.getStatus && !manual) {
      console.log(colors.red("\n== GAME OVER =="));
      console.log(colors.red(`THE WORD WAS: ${this.getWord}`));
    } else {
      console.log(colors.green("\nCONGRATULATIONS, GAME WON!"));
      console.log(colors.green(`THE WORD WAS: ${this.getWord}`));
    }
    return;
  };

  printInstructions = () => {
    console.log("-- WELCOME TO HANGMAN --");
    console.log("\nInstructions:");
    console.log(
      "- A random word is already chosen for you, you must guess a letter in the word or the word itself."
    );
    console.log(
      "- But be careful! If you get the letter or word wrong, you will go forward in stages."
    );
    console.log(
      "- There is a total of 7 stages, once you reach the 7th stage, it's GAME OVER."
    );
    console.log('- To quit the game, enter "^q"');
  };

  //user's input (letter or word)
  userInput = () => {
    return prompt(colors.green("Your Guess: ")).toLowerCase();
  };

  game(stage, guesses) {
    if (!this.hiddenWord.includes("_")) {
      this.toggleStatus();
      this.endGame();
      return;
    }
    let guess;
    let valid = false;
    stage.printStage();

    //print out the player's guess
    if (guesses.length > 0) {
      console.log(`Your guesses: ${guesses}`);
    }
    do {
      guess = this.userInput();

      //quit
      if (guess === "^q") {
        this.endGame(true);
        this.forceQuit = true;
        return;
      }

      if (guesses.includes(guess)) {
        console.log(colors.yellow(`!!! You have already guessed ${guess} !!!`));
      } else {
        valid = true;
      }
    } while (!valid);

    //update guesses list with the new guess
    guesses.push(guess);

    if (guess.length > 1) {
      if (guess == this.getWord) {
        this.toggleStatus();
        this.endGame();
        return;
      } else {
        this.decrementLives();
        stage.incrementStage();
      }
    } else {
      if (this.getWord.includes(guess)) {
        let indexes = [];
        for (let i = 0; i < this.getWord.length; i++) {
          if (this.getWord[i] === guess) {
            indexes.push(i);
          }
        }
        for (let x in indexes) {
          this.hiddenWord =
            this.hiddenWord.substring(0, indexes[x]) +
            this.getWord[indexes[x]] +
            this.hiddenWord.substring(indexes[x] + 1);
        }
        return this.hiddenWord;
      } else {
        this.decrementLives();
        stage.incrementStage();
      }
    }
    return;
  }
}

const game = new Game();
game.startGame();
