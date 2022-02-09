//Variables globales 
var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;


function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

//configuración principal 
function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
  //Almacenamos la base de datos en una variable 
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  
}

//Ajusta altura y ancho de la ventana automáticamente 
function windowResized() {
  //Crea un nuevo canvas con los ajustes 
  resizeCanvas(windowWidth, windowHeight);
}
