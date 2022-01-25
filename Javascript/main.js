class Game {
  constructor() {
    this.tile1 = document.querySelector(".tile1");
    this.tile2 = document.querySelector(".tile2");
    this.tile3 = document.querySelector(".tile3");
    this.tile4 = document.querySelector(".tile4");
    this.tileStart = document.querySelector(".tile-start");
    this.flashCount = 3;
    this.flashSpeed = 600;
    this.flashOrder = [];
    this.playerPatern = [];
    this.playerIsDone = false;
  }

  startGame() {
    this.tileStart.addEventListener("click", (e) => {
      this.patternGenerator();

      console.log("clicked tile START");
    });;
  }

  flashTile(tileNr, removeClass, addClass) {
    tileNr.classList.remove(removeClass);
    tileNr.classList.add(addClass);
  }

  patternGenerator() {
    // Generate random number array
    for (let i = 0; i < this.flashCount; i++) {
      this.flashOrder.push(Math.floor(Math.random() * 4) + 1);
      this.flashOrder.push(0);
    }
    console.log(this.flashOrder);

    //Interval to slowly iterate trough the number array and change classes.
    let count = 0;
    let flashTimer = setInterval(() => {
      if (this.flashOrder[count] === 1) {
        this.flashTile(this.tile1, "tile1", "red");
      } else {
        this.flashTile(this.tile1, "red", "tile1");
      }

      if (this.flashOrder[count] === 2) {
        this.flashTile(this.tile2, "tile2", "blue");
      } else {
        this.flashTile(this.tile2, "blue", "tile2");
      }

      if (this.flashOrder[count] === 3) {
        this.flashTile(this.tile3, "tile3", "green");
      } else {
        this.flashTile(this.tile3, "green", "tile3");
      }

      if (this.flashOrder[count] === 4) {
        this.flashTile(this.tile4, "tile4", "yellow");
      } else {
        this.flashTile(this.tile4, "yellow", "tile4");
      }

      if (count > this.flashOrder.length) {
        clearInterval(flashTimer);
        this.playerClick()
      }
      count++;
    }, this.flashSpeed);
    
    console.log(this.playerPatern);
  }

  playerClick() {
   
    this.tile1.addEventListener("click", (e) => {
      this.playerPatern.push(1);
      this.playerPatern.push(0);
      this.winLoseStatus()
      
      console.log("clicked tile 1");
    });
    this.tile2.addEventListener("click", (e) => {
      this.playerPatern.push(2);
      this.playerPatern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 2");
    });
    this.tile3.addEventListener("click", (e) => {
      this.playerPatern.push(3);
      this.playerPatern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 3");
    });
    this.tile4.addEventListener("click", (e) => {
      this.playerPatern.push(4);
      this.playerPatern.push(0);
      this.winLoseStatus()
      console.log("clicked tile 4");
    });

  }

  startWinLose(){
    if (this.computerIsDone){
      this.winLoseStatus();
    }
  }

  winLoseStatus() {
    if (
      this.flashOrder.length === this.playerPatern.length
    ) {
      this.checkWinLose();
    }
  }

  checkWinLose() {
    if (JSON.stringify(this.playerPatern) === JSON.stringify(this.flashOrder)) {
      alert("YOU WON, WELL DONE!!");
      location.reload();
    } else {
      alert("OH NO, YOU LOST!");
      location.reload;
    }
  }
}

// class Player {
//   constructor(playerPatern) {
//     this.playerPatern = playerPatern;
//     console.log(this.playerPatern)
//   }
// }

const game = new Game();
game.startGame();
