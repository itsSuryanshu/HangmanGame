const { hangmanStages } = require("./hangmanStages.js");
const { getRandomWord } = require("./word.js");
const prompt = require("prompt-sync")();

class Game {
  #word;
  #hiddenWord;
  #lives = 7;
  #win = false;
  #forceQuit = false;
  startGame = async () => {
    this.#word = await getRandomWord();
    //this.#word = "call";
    this.#hiddenWord = "_".repeat(this.#word.length);

    //print out the instructions
    this.printInstructions();

    const stage = new hangmanStages();

    //print out the stage and lives (set up the game console UI)
    while (
      this.#lives > 0 &&
      this.#win === false &&
      this.#forceQuit === false
    ) {
      console.log(`\n== WORD: ${this.#hiddenWord} ==`);
      console.log(`Lives: ${this.#lives}`);
      this.game(stage);
    }

    //end the game properly
    if (!this.#win) {
      if (this.#forceQuit) {
        return;
      } else {
        this.endGame();
      }
    }
  };

  endGame = (manual = false) => {
    if (!this.#win && manual) {
      console.log("\n== Game Ended ==");
    } else if (!this.#win && !manual) {
      console.log("\n== GAME OVER ==");
      console.log(`THE WORD WAS: ${this.#word}`);
    } else {
      console.log("\nCONGRATULATIONS, GAME WON!");
      console.log(`THE WORD WAS: ${this.#word}`);
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
      "- There is a total of 8 stages, once you reach the 8th stage, it's GAME OVER."
    );
    console.log(
      '- To quit the game, enter "^q" and to restart the game, enter "^r"'
    );
  };

  //user's input (letter or word)
  userInput = () => {
    return prompt("Your Guess: ").toLowerCase();
  };

  game(stage) {
    if (!this.#hiddenWord.includes("_")) {
      this.#win = true;
      this.endGame();
      return;
    }
    stage.printStage();
    let guess = this.userInput();
    if (guess === "^q") {
      this.endGame(true);
      this.#forceQuit = true;
      return;
    }
    if (guess.length > 1) {
      if (guess == this.#word) {
        this.#win = true;
        this.endGame();
        return;
      } else {
        this.#lives--;
        stage.incrementStage();
      }
    } else {
      if (this.#word.includes(guess)) {
        let indexes = [];
        for (let i = 0; i < this.#word.length; i++) {
          if (this.#word[i] === guess) {
            indexes.push(i);
          }
        }
        for (let x in indexes) {
          this.#hiddenWord =
            this.#hiddenWord.substring(0, indexes[x]) +
            this.#word[indexes[x]] +
            this.#hiddenWord.substring(indexes[x] + 1);
        }
        return this.#hiddenWord;
      } else {
        this.#lives--;
        stage.incrementStage();
      }
    }
    return;
  }
}

const game = new Game();
game.startGame();
