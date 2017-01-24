

var asteroid = {
  Constructor: function(x, y, vx, vy, wd, ht ){
    this.locationX = x;
    this.locationY = y;
    this.velX = vx;
    this.velY= vy;
    this.collision = false;
    this.width = wd;
    this.height = ht;

    this.updatePosition = function() {
      this.locationX += this.velX;
      this.locationX = ((this.locationX % space.width) + space.width) % space.width;
      this.locationY += this.velY;
      this.locationY = ((this.locationY % space.height) + space.height) % space.height;
    };
  },

  randAsteroid: function(){
    var randX = Math.random() * space.width + 1;
    var randY = Math.random() * space.height+ 1;

    var randVX =  2 * Math.random() * space.MAX_VELOCITY - space.MAX_VELOCITY;
    var randVY =  2 * Math.random() * space.MAX_VELOCITY - space.MAX_VELOCITY;

    return new asteroid.Constructor( randX, randY, randVX, randVY, 50, 50 );
  },
};

var ship = {
  width: 30,
  height: 50,
  // acceleration: 12,
  locationX: 300,
  locationY: 300,
  direction: 0.0 * Math.PI,
  velX: 0,
  velY: 0,

  randomStartInfo: function(){
    // this.velX =  Math.floor( 2 * Math.random() * space.MAX_VELOCITY - space.MAX_VELOCITY );
    // this.velY =  Math.floor( 2 * Math.random() * space.MAX_VELOCITY - space.MAX_VELOCITY);
  },

  updatePosition: function() {
      this.locationX += this.velX;
      this.locationX = ((this.locationX % space.width) + space.width) % space.width;
      this.locationY += this.velY;
      this.locationY = ((this.locationY % space.height) + space.height) % space.height;
  },

  headPoint: function() {
    var r = 30;
    var theta = ship.direction;
    point = {
      x: ship.locationX + (r * Math.cos( theta )),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },

  rearPoint1: function() {
    var r = 25;
    var theta = 3/4 * Math.PI + ship.direction;
    point = {
      x: ship.locationX + r * Math.cos( theta ),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },

  rearPoint2: function() {
    var r = 25;
    var theta = 5/4 * Math.PI + ship.direction;
    point = {
      x: ship.locationX + r * Math.cos( theta ),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },
};

var space = {
    MAX_VELOCITY: 1.8,
    width: 800,
    height: 600,
    asteroids: [],
    minAsteroidSize: 20,
};

