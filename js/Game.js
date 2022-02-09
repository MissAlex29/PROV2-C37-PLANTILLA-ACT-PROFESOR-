class Game {
  constructor() {}
  //Función para obtener estado de juego de base de datos 
  getState(){
   
  }
  start() {
    //Objeto para el formulario de registro
    form = new Form();
    form.display();

    //Objeto para el jugador 
    player = new Player();
   
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
}
