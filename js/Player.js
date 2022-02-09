class Player {
  constructor() {
    this.name = null; //Guarda el nombre del jugador
    this.index = null; //Da una identificación única a cada jugador
    //Almacena la posición x e y de cada jugador
    this.positionX = 0; 
    this.positionY = 0; 
  }
  
  //Dar posición ajugador ya actualizarlo en BD.
  addPlayer(){
    
  }
  
  //Actualizamos el campo playerCount en la base de datos 
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }
  
  //Leemos el valor y lo guardamos en una variable 
  updateCount(count) {
    //.update almacena el valor de la variable EN LA BASE DE DATOS 
    //La diagonal se usa para hacer referencia al directorio raiz
    database.ref("/").update({
      playerCount: count
    });
  }
}
