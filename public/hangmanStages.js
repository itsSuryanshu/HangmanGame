class hangmanStages {
  #stage;
  constructor() {
    this.#stage = 1;
  }

  get getStage() {
    return this.#stage;
  }

  set setStage(stage_number) {
    this.#stage = stage_number;
    this.printStage();
  }

  incrementStage() {
    this.#stage++;
    //this.printStage();
  }

  resetStage() {
    this.#stage = 1;
    this.printStage();
  }

  printStage() {
    switch (this.#stage) {
      case 1:
        console.log("____________");
        console.log("|          |");
        console.log("|          |");
        console.log("|");
        console.log("|");
        console.log("|");
        console.log("|");
        console.log("|");
        console.log("-----------");
        break;
      case 2:
        console.log("____________");
        console.log("|          |");
        console.log("|          |");
        console.log("|          ()");
        console.log("|");
        console.log("|");
        console.log("|");
        console.log("|");
        console.log("-----------");
        break;
      case 3:
        console.log("____________");
        console.log("|          |");
        console.log("|          |");
        console.log("|          ()");
        console.log("|          |");
        console.log("|          |");
        console.log("|");
        console.log("|");
        console.log("-----------");
        break;
      case 4:
        console.log("____________");
        console.log("|          |");
        console.log("|          |");
        console.log("|          ()");
        console.log("|          |");
        console.log("|          |");
        console.log("|         /");
        console.log("|        /");
        console.log("-----------");
        break;
      case 5:
        console.log("____________");
        console.log("|          |");
        console.log("|          |");
        console.log("|          ()");
        console.log("|          |");
        console.log("|          |");
        console.log("|         / \\");
        console.log("|        /   \\");
        console.log("-----------");
        break;
      case 6:
        console.log("____________");
        console.log("|          |");
        console.log("|          |");
        console.log("|          ()");
        console.log("|      ----|");
        console.log("|          |");
        console.log("|         / \\");
        console.log("|        /   \\");
        console.log("-----------");
        break;
      case 7:
        console.log("____________");
        console.log("|          |");
        console.log("|          |");
        console.log("|          ()");
        console.log("|      ----|----");
        console.log("|          |");
        console.log("|         / \\");
        console.log("|        /   \\");
        console.log("-----------");
        break;
      case 8:
        console.log("____________");
        console.log("|          |");
        console.log("|          |");
        console.log("|        (*u*)");
        console.log("|      ----|----");
        console.log("|          |");
        console.log("|         / \\");
        console.log("|        /   \\");
        console.log("-----------");
        break;
      default:
        break;
    }
  }
}

module.exports = { hangmanStages };
