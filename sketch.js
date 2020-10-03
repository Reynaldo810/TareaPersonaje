var zelda;

function setup() {
  createCanvas(400, 400);
  zelda = new link();
  frameRate(15);
}

function draw() {
  background(220);
  zelda.mostrar();
  if (keyIsPressed && keyCode == 39){
    zelda.moverDer();
    scale(-0.5,0.5);

  }
  if (keyIsPressed && keyCode == 37){
    zelda.moverIzq();
  }
}