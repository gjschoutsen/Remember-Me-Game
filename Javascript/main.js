class Game {
    constructor() {
        this.tile1 = document.querySelector(".tile1")
        this.tile2 = document.querySelector(".tile2")
        this.tile3 = document.querySelector(".tile3")
        this.tile4 = document.querySelector(".tile4")
        this.tileStart = document.querySelector(".tile-start")
}

startGame (){
    this.addEventListener()
}

patternGenerator(){
    
        
        
 


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
    
    }
    
    

}

const game = new Game();
game.startGame();