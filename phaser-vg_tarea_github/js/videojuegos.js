// 1
    function dinosaurio() {
                // La variable "game" nos sirve para almacenar una instancia (copia) del js del juego, el 512 y el 128 son el tamaaño de la imagen de fondo


            var game = new Phaser.Game(612, 474, Phaser.AUTO, "", {preload: preload, create:create, update: update});


            // La variable "player" contiene todo lo relacionado al jugador
            var player;

            // El juego se divide en tre fases, representadas por funciones: preload, create y update
            // Con "preload" cargamos en lamemoria de la memoria de la computadora que vamos a usar

            function preload(){
                game.load.spritesheet("heroe", "sprites/dinosaurio_sprite.png", 85, 117);
                game.load.image("fondo", "fondos/volcanes.jpeg");
            };

            // Con "create" nos permite colocar objetos en el escenario
            function create(){
                //Agregar imagen de fondo
                game.add.sprite(0,  0, "fondo");

                //Agregar color de fondo
                game.stage.backgroundColor = "#4488AA";

                //Colocar el heroe en el escenario
                player = game.add.sprite(game.width / 2, game. height / 1.5, "heroe");     //SE pone /2, para poner el personej en medio
                
                //animaciones
                player.animations.add("der", [1, 2, 3, 4, 5, 6, 7, 8], 10, true);  //10 cuadros por segundo y true indica que la animación se va a repetir
                player.animations.add("izq", [10, 11, 12, 13, 14, 15, 16, 17, 18], 10, true); 

                player.animations.add("c_izq", [1, 2, 3, 4, 5, 6, 7, 8], 10, true);  
                player.animations.add("c_der", [10, 11, 12, 13, 14, 15, 16, 17, 18], 10, true); 

                //Asignar las animaciones a teclas
                derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
                izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
                corre_izq = game.input.keyboard.addKey(Phaser.Keyboard.L);
                corre_der = game.input.keyboard.addKey(Phaser.Keyboard.J);
            };

            //La funciónupdate permite actulizar las animaicones con la velocidad que elijamos
            function update(){
                if (derecha.isDown){
                    player.x += 1;  //+1 es pixel que se agrega al avanzar,si fuera carrera sería +3. El mas es hacia adelnate y menos hacia atras
                    player.animations.play ("der");
                }
                else if (izquierda.isDown){
                    player.x -= 1;
                    player.animations.play("izq");
                }
                else if (corre_izq.isDown){
                        player.x += 3;
                        player.animations.play("c_izq");
                }
                else if (corre_der.isDown){
                    player.x -= 3;
                    player.animations.play("c_der");
            }
                else{
                    player.animations.stop();  //Posición cuando no oprimimos nada
                    player.frame = 128;
                }
            };
    }


    // 2
    function sonic() {
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

}

// 3


// Calculadora Suma, Resta, Multiplicación y Divisi�n 
// empleando condicionales si-entonces (IF-THEN)
function medieval() {
                // La variable "game" nos sirve para almacenar una instancia del juego 

            var game = new Phaser.Game(914, 874, Phaser.AUTO, '', {preload: preload, create: create, update})

            var player;

            // El juego se divide en tres fases: precarga(preload), crear (create), y actualizar (update). 
            // Con el preload cargamos memoria de la computadora con los elementos que vamos a usar

            function preload(){
                game.load.spritesheet('heroe', 'sprites/mi_personaje.png', 32, 32);
                game.load.image("fondo", "fondos/fondo_mipersonaje.jpeg");
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
        }
}