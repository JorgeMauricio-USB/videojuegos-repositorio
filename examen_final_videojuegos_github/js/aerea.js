// La variable "game" nos sirve para almacenar una instancia del juego 

var game = new Phaser.Game(905, 880, Phaser.AUTO, '', {preload: preload, create: create, update})

var player;

// El juego se divide en tres fases: precarga(preload), crear (create), y actualizar (update). 
// Con el preload cargamos memoria de la computadora con los elementos que vamos a usar

function preload(){
    game.load.spritesheet('heroe', 'images/mi_personaje.png', 32, 32);
    game.load.image("fondo", "images/fondo_vista_aerea.jpg");
};

// la función de crear nos permirmite colocar los objetos en el escenario 

function create(){

    //Agregar imagen de fondo
    game.add.sprite(0,  0, "fondo");
    // agregar color de fondo
    game.stage.backgroundColor = '#4488AA';
    
    //Colocar herore en el escenario
    player = game.add.sprite(game.width / 1.8, game.height / 2, 'heroe');
    
    //Las animaciones
    player.animations.add('der', [7, 8, 9], 10, true);
    player.animations.add('izq', [4, 5, 6], 10, true);
    player.animations.add('arr', [10, 11, 12], 10, true);
    player.animations.add('aba', [1, 2, 3], 10, true);

    //asignar las animaciones a teclas 
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    arriba = game.input.keyboard.addKey(Phaser.Keyboard.W);
    abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);
    
};

// La funcion de update permite actualizar las animaciones con velocidad que elijamos 

function update(){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der')
    }
    else if (izquierda.isDown){
        player.x -=1;
        player.animations.play('izq')
    }
    else if (arriba.isDown){
        player.y -=1;
        player.animations.play('arr')
    }
    else if (abajo.isDown){
        player.y +=1;
        player.animations.play('aba')
    }
    else {
        player.animations.stop();
        player.frame = 0;
    }

};