// La variable "game" nos sirve para almacenar una instancia (copia) del js del juego, el 512 y el 128 son el tamaaño de la imagen de fondo


var game = new Phaser.Game(1200, 630, Phaser.AUTO, "", {preload: preload, create:create, update: update});


// La variable "player" contiene todo lo relacionado al jugador
var player;

// El juego se divide en tre fases, representadas por funciones: preload, create y update
// Con "preload" cargamos en lamemoria de la memoria de la computadora que vamos a usar

function preload(){
    game.load.spritesheet("heroe", "sprites/sonic.png", 83.5, 117);
    game.load.image("bosque", "fondos/fondo_sonic.jpeg");
};

// Con "create" nos permite colocar objetos en el escenario
function create(){
     //Agregar imagen de fondo que se desplaza con tile.sprite
    fondo = game.add.tileSprite(0, 0, 1200, 630, "bosque")

    //Agregar color de fondo
    game.stage.backgroundColor = "#4488AA";

    //Colocar el heroe en el escenario
    player = game.add.sprite(game.width / 2, 440, "heroe");     //SE pone /2, para poner el personej en medio
    
    //animaciones
    player.animations.add("der", [1, 2, 3], 10, true);  //10 cuadros por segundo y true indica que la animación se va a repetir
    player.animations.add("der_rapid", [1, 2, 3], 10, true); 
    player.animations.add("bola", [5, 6, 7, 8, 9, 10, 11, 12], 10, true); 



    //Asignar las animaciones a teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.A);
    derecha_rapid = game.input.keyboard.addKey(Phaser.Keyboard.S);
    bola = game.input.keyboard.addKey(Phaser.Keyboard.D);
};

//La funciónupdate permite actulizar las animaicones con la velocidad que elijamos
function update(){
    if (derecha.isDown){
        fondo.tilePosition.x -= 2;  //+1 es pixel que se agrega al avanzar,si fuera carrera sería +3. El mas es hacia adelnate y menos hacia atras
        player.animations.play ("der");
    }
    else if (derecha_rapid.isDown){
        fondo.tilePosition.x -= 5; 
        player.animations.play("der_rapid");
    }
    else if (bola.isDown){
        fondo.tilePosition.x -= 10; 
        player.animations.play("bola");
    }

    else{
        player.animations.stop();  //Posición cuando no oprimimos nada
        player.frame = 128;
    }
};
