
var controller = {

    direction: "",
    fire: false,

    init: function() {
        view.clearCanvas();
        view.drawShip( ship );
        ship.randomStartInfo();
        controller.generateAsteroids(5);
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
    splitAsteroid: function(ast, index){
    space.asteroids.push(new asteroid.Constructor(ast.locationX - 25, ast.locationY - 25, ast.velX * -1, ast.velY * -1, ast.width/2, ast.height/2));
    space.asteroids.push(new asteroid.Constructor(ast.locationX + 25, ast.locationY + 25, ast.velX * -1, ast.velY * -1, ast.width/2, ast.height/2));

    space.asteroids.splice(index, 1);

    },

    setDirection: function(  ) {
        if(controller.direction === "right"){
          ship.direction += 1/20 * Math.PI;
        }else if (controller.direction === "left"){
          ship.direction -= 1/20 * Math.PI;
        }
    },

    setThrust: function(){
        if(controller.direction === "up"){
            console.log("thrust");
          ship.velX += 1 * Math.cos(ship.direction) / 2;
          ship.velY += 1 * Math.sin(ship.direction) / 2;
        }
    },

    controlShipFire: function() {
        if(controller.fire === true){
          ship.fire();
          controller.fire = false;
        }
    },

    gameLoop:function() {
        view.clearCanvas();
        view.drawShip( ship );
        controller.setDirection();
        controller.setThrust();
        controller.controlShipFire();
        controller.updateAsteroidPos();
        ship.updatePosition();
        asteroid.collision();
    },

    game: function() {
      setInterval(controller.gameLoop, 20);
    }
};

