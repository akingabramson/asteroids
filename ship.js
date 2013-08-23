Asteroids = (function(Asteroids){
	var Ship = Asteroids.Ship = function Ship(xpos, ypos, speed, direction) {
		Asteroids.MovingObject.call(this, xpos, ypos, speed, direction);
		this.radius = 20;
		this.newDirection = this.direction*1
	}

	Ship.inherits(Asteroids.MovingObject);

	Ship.prototype.bindKeys = function() {
		var ship = this;
		key('up', function(){
			ship.speed +=.5;
			ship.direction = ship.newDirection;
		});
  	key('down', function(){ 
  		ship.speed -=1;
  		ship.direction = ship.newDirection;
  	});
  	key('left', function(){ ship.newDirection += .2;});
  	key('right', function(){ ship.newDirection -= .2;});
	}

	Ship.prototype.update = function(screenBoundX, screenBoundY) {
		Asteroids.MovingObject.prototype.update.call(this);

		// to wrap around screen
		this.xpos = Math.abs((this.xpos + screenBoundX)% screenBoundX);
		this.ypos = Math.abs((this.ypos + screenBoundY)% screenBoundY);

		this.headx = this.xpos + Math.cos(this.newDirection)*this.radius;
		this.heady = this.ypos - Math.sin(this.newDirection)*this.radius;
	}

	Ship.prototype.draw = function(context) {	
		context.fillStyle   = '#00f';
		context.strokeStyle = '#f00';
		context.lineWidth   = 1;

		context.beginPath();

		 // give the (x,y) coordinates
		var d120 = 2*Math.PI/3;
		var currentDirection = this.newDirection

		var pos1y = Math.sin(currentDirection)*this.radius*-1;
		var pos1x = Math.cos(currentDirection)*this.radius;
		var pos2y = Math.sin(currentDirection-d120)*this.radius*-1;
		var pos2x = Math.cos(currentDirection-d120)*this.radius;
		var pos3y = Math.sin(currentDirection-2*d120)*this.radius*-1;
		var pos3x = Math.cos(currentDirection-2*d120)*this.radius;

		context.moveTo(this.xpos + pos1x, this.ypos + pos1y);
		context.lineTo(this.xpos + pos2x, this.ypos + pos2y);
		context.lineTo(this.xpos + pos3x, this.ypos + pos3y);
		context.lineTo(this.xpos + pos1x, this.ypos + pos1y);
	
		context.fill();
		context.stroke();
		context.closePath();

		// fill head
		context.fillStyle = "black";
    context.beginPath();
    context.arc(
      this.headx,
      this.heady,
      3,
      0,
      2 * Math.PI,
      false
    );
    context.closePath();
    context.fill();

	}

	Ship.prototype.isHit = function(asteroids) {
		for (var i = 0; i < asteroids.length; i++) {
			var asteroid = asteroids[i];
			if (this.collision(asteroid)) {
				return true;
			}
		}
		return false;
	}

	Ship.prototype.fireBullet = function(){
		// test xpos*1, ypos*1, velocity clone

		var yDirection, xDirection;

		var bullet = new Asteroids.Bullet(this.headx, this.heady, this.speed+7, this.newDirection*1);
		return bullet
	}

	return Asteroids
})(Asteroids || {})