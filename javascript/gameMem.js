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
    this.noteA = new Audio("./sound/a3.mp3")
    this.noteF = new Audio("./sound/f-3.mp3")
    this.noteE = new Audio("./sound/e3.mp3")
    this.noteG = new Audio("./sound/g3.mp3")
  }

  startGame() {
    this.canUserPlay = false;
    this.gamePage.style.display = "block";
    this.gameOverPage.style.display = "none";
    this.tileStart.addEventListener(
      "click",
      (e) => {
        this.patternGenerator();
        this.tileStart.innerText = "Try to remember!";
        console.log("clicked tile START1");
      },
      { once: true }
    );

  //   document.addEventListener(
  //     "keydown",
  //     (e) => {
  //       if (e.key === "Enter") {
  //         this.patternGenerator();
  //         this.tileStart.innerText = "Try to remember!";
  //         console.log("clicked tile START2");
  //       }
  //     },
  //     { once: true }
  //   );
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
        this.noteA.play()
      } else {
        this.changeClass(this.tileRed, "red", "tileRed");
      }
      if (this.computerPattern[count] === 2) {
        this.changeClass(this.tileBlue, "tileBlue", "blue");
        this.noteE.play()
      } else {
        this.changeClass(this.tileBlue, "blue", "tileBlue");
      }
      if (this.computerPattern[count] === 3) {
        this.changeClass(this.tileGreen, "tileGreen", "green");
        this.noteF.play()
      } else {
        this.changeClass(this.tileGreen, "green", "tileGreen");
      }
      if (this.computerPattern[count] === 4) {
        this.changeClass(this.tileYellow, "tileYellow", "yellow");
        this.noteG.play()
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

  pushAndCheckPlayer(playerNum) {
    if (this.canUserPlay) {
      this.playerPattern.push(playerNum);
      this.playerPattern.push(0);
      this.checkPatternsLengthIsEqual();
    }
  }

  addFlashAndAudio(tileNr, addClass, removeClass,sound){
    if (this.canUserPlay) {
    tileNr.classList.remove(removeClass);
    tileNr.classList.add(addClass);
    setTimeout(()=>{
    tileNr.classList.remove(addClass);
    tileNr.classList.add(removeClass);
    }, 200)
    sound.play();
   }
  }

  playerInput() {
    //mouse
    this.tileRed.addEventListener("click", (e) => {
      this.pushAndCheckPlayer(1);
      this.addFlashAndAudio(this.tileRed, "red", "tileRed", this.noteA);
      
    });
    this.tileBlue.addEventListener("click", (e) => {
      this.pushAndCheckPlayer(2);
      this.addFlashAndAudio(this.tileBlue, "blue", "tileBlue", this.noteE);
    });
    this.tileGreen.addEventListener("click", (e) => {
      this.pushAndCheckPlayer(3);
      this.addFlashAndAudio(this.tileGreen, "green", "tileGreen", this.noteF);
    });
    this.tileYellow.addEventListener("click", (e) => {
      this.pushAndCheckPlayer(4);
      this.addFlashAndAudio(this.tileYellow, "yellow", "tileYellow", this.noteG);
    });
    // arrow keys
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        this.pushAndCheckPlayer(1);
        this.addFlashAndAudio(this.tileRed, "red", "tileRed", this.noteA);
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.pushAndCheckPlayer(2);
        this.addFlashAndAudio(this.tileBlue, "blue", "tileBlue",this.noteE);
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.pushAndCheckPlayer(3);
        this.addFlashAndAudio(this.tileGreen, "green", "tileGreen",this.noteF);
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        this.pushAndCheckPlayer(4);
        this.addFlashAndAudio(this.tileYellow, "yellow", "tileYellow", this.noteG);
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
      console.log("first one", this.playerPattern);
      this.round++;
      this.tileStart.innerText = `Good! Get ready for round: ${this.round}`;
      this.roundCount.innerText = this.round;
      this.computerPatternCount += 1;
      this.computerPattern = [];
      this.playerPattern = [];
      setTimeout(() => {
        this.tileStart.innerText = "Tap to Start";
        this.startGame();
      }, 2000);
    } else {
      this.gameOverPage.style.display = "flex";
      this.gamePage.style.display = "none";
      this.computerPatternCount = 2;
      this.computerPattern = [];
      this.playerPattern = [];
      this.round = 1;
      this.roundCount.innerText = this.round;
      setTimeout(() => {
        this.tileStart.innerText = "Tap to Start again";
        this.startGame();
      }, 3000);
    }
  }
}

const game = new Game();
game.startGame();
game.playerInput();

let mute = document.querySelector(".mute-button");
let music = new Audio("./sound/bensound-hey.mp3")
music.volume = 0.1
music.loop = true;
music.play()
function muteMusic(){
  mute.addEventListener("click", (e) => {
    if(music.paused){
      music.play();
    }else {
      music.pause();
    }
    console.log("click")
  })
}

muteMusic();
