class Game {
  constructor() {
    this.tileRed = document.querySelector(".tileRed");
    this.tileBlue = document.querySelector(".tileBlue");
    this.tileGreen = document.querySelector(".tileGreen");
    this.tileYellow = document.querySelector(".tileYellow");
    this.tileStart = document.querySelector(".tile-start");
    this.computerPatternCount = 5;
    this.computerPatternSpeed = 400;
    this.computerPattern = [];
    this.playerPattern = [];
  }

  startGame() {
    this.tileStart.addEventListener("click", (e) => {
      this.patternGenerator();
      this.changeClass(this.tileStart, "tile-start", "tile-running")
      this.tileStart.innerText = "Remember the pattern."
      console.log("clicked tile START");
    },{once:true});

    document.addEventListener("keydown", (e) => {
      if(e.key === "Enter"){
      this.patternGenerator();
      this.changeClass(this.tileStart, "tile-start", "tile-running")
      this.tileStart.innerText = "Remember the pattern."
      console.log("clicked tile START");
    }},{once:true});
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
        this.playerClick()
        this.tileStart.innerText = "It's your turn!"
      }
      count++;
    }, this.computerPatternSpeed);
    
    console.log(this.playerPattern);
    console.log(count)
  }

  playerClick() {
   //mouse
    this.tileRed.addEventListener("click", (e) => {
      this.playerPattern.push(1);
      this.playerPattern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 1");
    });
    this.tileBlue.addEventListener("click", (e) => {
      this.playerPattern.push(2);
      this.playerPattern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 2");
    });
    this.tileGreen.addEventListener("click", (e) => {
      this.playerPattern.push(3);
      this.playerPattern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 3");
    });
    this.tileYellow.addEventListener("click", (e) => {
      this.playerPattern.push(4);
      this.playerPattern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 4");
    });

    // arrow keys
    document.addEventListener("keydown", (e) => {
      if(e.key === "ArrowUp"){
      this.playerPattern.push(1);
      this.playerPattern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 1");
      }
    });
    document.addEventListener("keydown", (e) => {
      if(e.key === "ArrowLeft"){
      this.playerPattern.push(2);
      this.playerPattern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 2");
      }
    });
    document.addEventListener("keydown", (e) => {
      if(e.key === "ArrowRight"){
      this.playerPattern.push(3);
      this.playerPattern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 3");
      }
    });
    document.addEventListener("keydown", (e) => {
      if(e.key === "ArrowDown"){
      this.playerPattern.push(4);
      this.playerPattern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 4");
      }
    });
  }

  winLoseStatus() {
    if (
      this.computerPattern.length === this.playerPattern.length
    ) {
      this.checkWinLose();
    }
  }

  checkWinLose() {
    if (JSON.stringify(this.playerPattern) === JSON.stringify(this.computerPattern)) {
      alert("YOU WON, WELL DONE!!");
      location.reload();
    } else {
      alert("OH NO, YOU LOST! Try again");
      location.reload();
    }
  }
}

// class Player {
//   constructor(playerPattern) {
//     this.playerPattern = playerPattern;
//     console.log(this.playerPattern)
//   }
// }

const game = new Game();
game.startGame();
