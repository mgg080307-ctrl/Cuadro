function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200); // Fondo rojo

  // Inspirado en el constructivismo
   stroke("Black")
  strokeWeight(10)

  // Cuadradro amarillo
  fill(255,255,0);
  square(50, 300, 1050);

   // Circulo marron
  fill(141,73,37);
 circle(1050, 400, 1000, 100);

  // Rectangulo naranja
  fill(255, 140, 0);
  rect(1000, 250, 1050, 1000);

  // Triangulo verde oscuro 
  fill(0,100,0);
  triangle(50, 300, 50, 50, 3000, 300)

   // Rectangulo rojo 
  fill(255, 0, 0);
  rect(800, 600, 1000, 1000);

    // Triangulo violeta 
  fill(255, 0, 255);
  triangle(1000, 300, 450, 100, 4000, 3500);
  
    // Circulo marron
  fill(255,182,193);
 circle(380, 700, 700, 100);

  // Rectangulo azul 
  fill(0, 0, 255);
  noStroke();
  rect(50, 500, 800, 1050);

  // Circulo negro
  fill(0);
 circle(1700, 550, 900, 100);

}
