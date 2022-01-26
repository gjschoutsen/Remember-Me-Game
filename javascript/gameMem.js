class Game {
  constructor() {
    this.tileRed = document.querySelector(".tileRed");
    this.tileBlue = document.querySelector(".tileBlue");
    this.tileGreen = document.querySelector(".tileGreen");
    this.tileYellow = document.querySelector(".tileYellow");
    this.tileStart = document.querySelector(".tile-start");
    this.roundCount = document.querySelector(".counter");
    this.gameOverPage = document.querySelector("#gameover");
    this.gamePage = document.querySelector("#game");
    this.computerPatternCount = 2;
    this.computerPatternSpeed = 400;
    this.computerPattern = [];
    this.playerPattern = [];
    this.canUserPlay = false;
    this.round = 1;
  }

  startGame() {
    this.canUserPlay = false;
    this.gamePage.style.display = "block"
    this.gameOverPage.style.display = "none";
    this.tileStart.addEventListener(
      "click",
      (e) => {
        this.patternGenerator();
        this.changeClass(this.tileStart, "tile-start", "tile-running");
        this.tileStart.innerText = "Remember the pattern.";
        console.log("clicked tile START");
      },
      { once: true }
    );

    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter") {
          this.patternGenerator();
          this.changeClass(this.tileStart, "tile-start", "tile-running");
          this.tileStart.innerText = "Remember Me.";
          console.log("clicked tile START");
        }
      },
      { once: true }
    );
  }

  changeClass(tileNr, removeClass, addClass) {
    tileNr.classList.remove(removeClass);
    tileNr.classList.add(addClass);
  }

  patternGenerator() {
    // Generate random number array
    for (let i = 0; i < this.computerPatternCount; i++) {
      this.computerPattern.push(Math.floor(Math.random() * 4) + 1);
      this.computerPattern.push(0);
    }
    console.log(this.computerPattern);

    //Interval to slowly iterate trough the number array and change classes.
    let count = 0;
    let flashTimer = setInterval(() => {
      if (this.computerPattern[count] === 1) {
        this.changeClass(this.tileRed, "tileRed", "red");
      } else {
        this.changeClass(this.tileRed, "red", "tileRed");
      }

      if (this.computerPattern[count] === 2) {
        this.changeClass(this.tileBlue, "tileBlue", "blue");
      } else {
        this.changeClass(this.tileBlue, "blue", "tileBlue");
      }

      if (this.computerPattern[count] === 3) {
        this.changeClass(this.tileGreen, "tileGreen", "green");
      } else {
        this.changeClass(this.tileGreen, "green", "tileGreen");
      }

      if (this.computerPattern[count] === 4) {
        this.changeClass(this.tileYellow, "tileYellow", "yellow");
      } else {
        this.changeClass(this.tileYellow, "yellow", "tileYellow");
      }

      if (count > this.computerPattern.length) {
        clearInterval(flashTimer);
        this.tileStart.innerText = "It's your turn!";
        this.canUserPlay = true;
      }
      count++;
    }, this.computerPatternSpeed);

    console.log(this.playerPattern);
  }

  pushAndCheckPlayerPattern(playerNum, zero){

  }

  playerInput() {
    //mouse
    this.tileRed.addEventListener("click", (e) => {
      if(this.canUserPlay){
      this.playerPattern.push(1);
      this.playerPattern.push(0);
      this.checkPatternsLengthIsEqual();
      console.log("clicked tile 1")
      } 
    },);

    this.tileBlue.addEventListener("click", (e) => {
      if(this.canUserPlay){
      this.playerPattern.push(2);
      this.playerPattern.push(0);
      this.checkPatternsLengthIsEqual();
      console.log("clicked tile 2")
      }
    });

    this.tileGreen.addEventListener("click", (e) => {
      if(this.canUserPlay){
      this.playerPattern.push(3);
      this.playerPattern.push(0);
      this.checkPatternsLengthIsEqual();
      console.log("clicked tile 3")
      }
    });

    this.tileYellow.addEventListener("click", (e) => {
      if(this.canUserPlay){
      this.playerPattern.push(4);
      this.playerPattern.push(0);
      this.checkPatternsLengthIsEqual();
      console.log("clicked tile 4")
      }
    });

    // arrow keys
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        this.playerPattern.push(1);
        this.playerPattern.push(0);
        this.checkPatternsLengthIsEqual();
        console.log("clicked tile 1");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.playerPattern.push(2);
        this.playerPattern.push(0);
        this.checkPatternsLengthIsEqual();
        console.log("clicked tile 2");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.playerPattern.push(3);
        this.playerPattern.push(0);
        this.checkPatternsLengthIsEqual();
        console.log("clicked tile 3");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        this.playerPattern.push(4);
        this.playerPattern.push(0);
        this.checkPatternsLengthIsEqual();
        console.log("clicked tile 4");
      }
    });
  }

  checkPatternsLengthIsEqual() {
    if (this.computerPattern.length === this.playerPattern.length) {
      this.checkWinLose();
    }
  }

  checkWinLose() {
    if (
      JSON.stringify(this.playerPattern) ===
      JSON.stringify(this.computerPattern)
    ) {
      console.log("first one", this.playerPattern)
      this.round++
      this.tileStart.innerText = `Good! Get ready for round: ${this.round}`
      this.roundCount.innerText = this.round;
      this.computerPattern = [];
      this.playerPattern = [];
      this.computerPatternCount += 1;
      setTimeout(() => {
        this.tileStart.innerText = "Click to Start";
        this.startGame();        
      }, 2000);
    } else {
      this.gameOverPage.style.display = "block";
      this.gamePage.style.display = "none";
      this.computerPattern = [];
      this.playerPattern = [];
      this.computerPatternCount = 2;
      this.round = 1;
      this.roundCount.innerText = this.round;
      setTimeout(() => {
        this.tileStart.innerText = "Click to Start again"
        this.startGame();
      }, 3000);
    }
  }
}

const game = new Game();
game.startGame();
game.playerInput();