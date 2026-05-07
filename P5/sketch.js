let posX;
let posY;
let posX2;
let posY2;

let velocidadX;
let velocidadY;
let velocidadX2;
let velocidadY2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = width/2
  posY = height/2
  posX2 = width/2
  posY2 = height/2
  velocidadX = -10
  velocidadY = -10
  velocidadX2 = 10
  velocidadY2 = 10
  }

function draw() {
  background(0);
  fill(random(233),1,(122))
  circle(posX,posY,50);
  
    posX = posX - velocidadX
    posY = posY - velocidadY
    if(posX >= width || posX < 0){
      velocidadX = velocidadX * -1
    }
      if(posY >= height || posY < 0){
      velocidadY = velocidadY * -1
    }

  circle(posX2,posY2,50);
  
    posX2 = posX2 - velocidadX2
    posY2 = posY2 - velocidadY2
    if(posX2 >= width || posX2 < 0){
      velocidadX2 = velocidadX2 * -1
    }
      if(posY2 >= height || posY2 < 0){
      velocidadY2 = velocidadY2 * -1
    }
}
