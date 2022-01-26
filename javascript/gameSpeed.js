class Game {
    constructor() {
      this.tileRed = document.querySelector(".tileRed");
      this.tileBlue = document.querySelector(".tileBlue");
      this.tileGreen = document.querySelector(".tileGreen");
      this.tileYellow = document.querySelector(".tileYellow");
      this.tileStart = document.querySelector(".tile-start");
      this.computerPatternCount = 6;
      this.computerPatternSpeed = 1500;
      this.computerPattern = [];
      this.playerPattern = [];
    }
  
    startGame() {
      this.tileStart.addEventListener(
        "click",
        (e) => {
          this.patternGenerator();
          this.changeClass(this.tileStart, "tile-start", "tile-running");
          this.tileStart.innerText = "Remember Me.";
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
            this.tileStart.innerText = "GO!";
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
          
          this.tileRed.addEventListener("click", (e) => {
            this.tileStart.innerText = "Good"
            console.log("clicked tile red");
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp") {
                this.tileStart.innerText = "Good";
              console.log("clicked tile red");
            }
          });

        } else {
          this.changeClass(this.tileRed, "red", "tileRed");

          this.tileRed.addEventListener("click", (e) => {
            this.tileStart.innerText = "LOSER";
            alert("OH NO, YOU LOST! Try again");
            location.reload();
            console.log("clicked tile red");
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp") {
                this.tileStart.innerText = "LOSER";
                alert("OH NO, YOU LOST! Try again");
                location.reload();
              console.log("clicked tile red");
            }
          });
        }
  
        if (this.computerPattern[count] === 2) {
          this.changeClass(this.tileBlue, "tileBlue", "blue");

          this.tileBlue.addEventListener("click", (e) => {
            this.tileStart.innerText = "Good"
            console.log("clicked tile blue");
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                this.tileStart.innerText = "Good";
              console.log("clicked tile blue");
            }
          });
        } else {
          this.changeClass(this.tileBlue, "blue", "tileBlue");

          this.tileBlue.addEventListener("click", (e) => {
            this.tileStart.innerText = "LOSER";
            alert("OH NO, YOU LOST! Try again");
            location.reload();
            console.log("clicked tile blue");
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                this.tileStart.innerText = "LOSER";
                alert("OH NO, YOU LOST! Try again");
                location.reload();
              console.log("clicked tile blue");
            }
          });
        }
  
        if (this.computerPattern[count] === 3) {
          this.changeClass(this.tileGreen, "tileGreen", "green");

          this.tileGreen.addEventListener("click", (e) => {
            this.tileStart.innerText = "Good"
            console.log("clicked tile green");
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                this.tileStart.innerText = "Good";
              console.log("clicked tile green");
            }
          });
        } else {
          this.changeClass(this.tileGreen, "green", "tileGreen");

          this.tileGreen.addEventListener("click", (e) => {
            this.tileStart.innerText = "LOSER";
            alert("OH NO, YOU LOST! Try again");
            location.reload();
            console.log("clicked tile green");
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                this.tileStart.innerText = "LOSER";
                alert("OH NO, YOU LOST! Try again");
                location.reload();
              console.log("clicked tile green");
            }
          });
        }
  
        if (this.computerPattern[count] === 4) {
          this.changeClass(this.tileYellow, "tileYellow", "yellow");

          this.tileYellow.addEventListener("click", (e) => {
            this.tileStart.innerText = "Good"
            console.log("clicked tile yellow");
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowDown") {
                this.tileStart.innerText = "Good";
              console.log("clicked tile yellow");
            }
          });
        } else {
          this.changeClass(this.tileYellow, "yellow", "tileYellow");

          this.tileYellow.addEventListener("click", (e) => {
            this.tileStart.innerText = "LOSER";
            alert("OH NO, YOU LOST! Try again");
            location.reload();
            console.log("clicked tile yellow");
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowDown") {
                this.tileStart.innerText = "LOSER";
                alert("OH NO, YOU LOST! Try again");
                location.reload();
              console.log("clicked tile yellow");
            }
          });
        }
  
        if (count > this.computerPattern.length) {
          clearInterval(flashTimer);
        }
        count++;
      }, this.computerPatternSpeed);
  
      console.log(this.playerPattern);
      console.log(count);
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
        alert("YOU WON, WELL DONE!!");
        location.reload();
      } else {
        alert("OH NO, YOU LOST! Try again");
        location.reload();
      }
    }
  }
  
  const game = new Game();
  game.startGame();
  