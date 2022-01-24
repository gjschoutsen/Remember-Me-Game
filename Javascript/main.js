class Game {
    constructor() {
        this.player = new Player;
        this.tile1 = document.querySelector(".tile1");
        this.tile2 = document.querySelector(".tile2");
        this.tile3 = document.querySelector(".tile3");
        this.tile4 = document.querySelector(".tile4");
        this.tileStart = document.querySelector(".tile-start");
        this.flashCount= 20;
        this.flashSpeed= 600;
}

startGame (){
    this.addEventListener()
}

flashTile (tileNr, removeClass, addClass){
    tileNr.classList.remove(removeClass);
    tileNr.classList.add(addClass)
}

patternGenerator(){

    // generate random number array
    this.flashOrder = [];
    for(let i = 0; i < this.flashCount; i++){
       this.flashOrder.push(Math.floor(Math.random() * 4) +1);
       this.flashOrder.push(0)
    }
    console.log(this.flashOrder)

    //Interval to slowly iterate trough the number array and change classes.
    let count = 0;
    let flashTimer = setInterval(() => {
        if( this.flashOrder[count] === 1){
            this.flashTile(this.tile1, "tile1", "red")
        }else {
            this.flashTile(this.tile1, "red", "tile1")
        }

        if( this.flashOrder[count] === 2){
            this.flashTile(this.tile2, "tile2", "blue")
        }else {
            this.flashTile(this.tile2, "blue", "tile2")
        }

        if( this.flashOrder[count] === 3){
            this.flashTile(this.tile3, "tile3", "green")
        }else {
            this.flashTile(this.tile3, "green", "tile3")
        }

        if( this.flashOrder[count] === 4){
            this.flashTile(this.tile4, "tile4", "yellow")
        }else {
            this.flashTile(this.tile4, "yellow", "tile4")
        }

        if( count > this.flashOrder.length){
            clearInterval(flashTimer)
        }
        count++
        
    }, this.flashSpeed);

    return this.flashOrder;
}

addEventListener (){
    this.tileStart.addEventListener("click", (e) => {
        console.log("clicked tile START")
        this.patternGenerator();
    })
    this.tile1.addEventListener("click", (e) => {
        console.log("clicked tile 1")
    })
    this.tile2.addEventListener("click", (e) => {
        console.log("clicked tile 2")
    })
    this.tile3.addEventListener("click", (e) => {
        console.log("clicked tile 3")
    })
    this.tile4.addEventListener("click", (e) => {
        console.log("clicked tile 4")
    })
}

}



class Player {
    constructor(){
    this.playerPatern = [];
    }
    
    

}

const game = new Game();
game.startGame();