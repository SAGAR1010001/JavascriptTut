class Player {
  live = 3;
  shootingDelay = 2000; // ms
  yPos = 500;
  xPos = 500;
    constructor() { }
    
    shoot() {
        //shoot a laser upward
    }
}

class Enemy {
  hp = 1;
  shootingDelay = 9000; //ms
  yPos;
  xPos;
  score = 10;
  constructor(yPos, xPos) {
    this.yPos = yPos;
    this.xPos = xPos;
    }
    
    shoot() {
        // shhot a something downwards
    }
}
const spaceship = new Player();
console.log(spaceship);

const enemy = new Enemy(20, 40)


console.log(enemy)