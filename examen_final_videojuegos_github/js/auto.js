var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'Auto', {preload: preload, create: create, update: update});

function preload(){
        game.load.image('auto', 'images/carro.png');
        // precargar sonidos 
        game.load.audio('inicio', ['audiofx/auto_llantas_chirriando.ogg', 'audiofx/auto_llantas_chirriando.mp3'])
        game.load.audio('arranque', ['audiofx/auto_carreras1.ogg', 'audiofx/auto_carreras1.mp3'])
  
        game.load.image('fondo', "images/estacionamiento.jpeg");
};

// Agregar fisicas, agrega peso al objeto para que vaya con la gravedad y detecte inercia, coliciones,etc.
function create(){
    game.add.sprite(0,0,'fondo');
    game.stage.backgroundColor = '#4488AA';

    game.physics.startSystem(Phaser.physics,'ARCADE')
    
    sprite = game.add.sprite(450, 80, 'auto');
    sprite.anchor.setTo(0.5, 0.5); //cambia el punto de ancla del objeto, en este caso el carro para que gire desde el centro

    game.physics.enable(sprite); // habilitar las físicas
    sprite.body.collideWorldBounds = true; //evita que se salga del escenario

    cursors = game.input.keyboard.createCursorKeys(); //agregar las teclas en este caso son las flechas del teclado


    inicio = game.add.audio("inicio");
    inicio.volume = 0,01;

    arranque = game.add.audio("arranque");
    inicio.volume = 0,01;

}

function update(){
    sprite.body.velocity.x = 0; 
    sprite.body.velocity.y = 0;
    sprite.body.angularVelocity = 0; // es la que permite que se mueva el carro

    if (cursors.left.isDown){sprite.body.angularVelocity = -200 }

    else if (cursors.right.isDown){sprite.body.angularVelocity = 200 };

    if (cursors.up.isDown){sprite.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(sprite.angle, 300)
    )};
}