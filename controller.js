
var controller = {

    init: function() {

    },

    generateAsteroids: function(num){
        for(var i=0; i <= num; i++){
          space.asteroids.push(asteroid.randAsteroid());
        }
    },

    updateAsteroidPos: function(){
        space.asteroids.forEach(function(ast, index, array){
          if (ast.collision === true && ast.width > space.minAsteroidSize){
            controller.splitAsteroid(ast, index);
          }
          ast.updatePosition();
          view.drawAsteroid(ast);
        });
    },
    
    gameLoop:function() {
        view.clearCanvas();
        view.drawShip( ship );
        // controller.setDirection();
        // controller.setThrust();
        // controller.controlShipFire();
        controller.updateAsteroidPos();
        // ship.updatePosition();
        // asteroid.collision();
    },

    game: function() {
      setInterval(controller.gameLoop, 20);
    }
};

