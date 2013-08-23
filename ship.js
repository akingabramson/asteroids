Asteroids = (function(Asteroids){
	var Ship = Asteroids.Ship = function Ship(xpos, ypos, speed, direction) {
		Asteroids.MovingObject.call(this, xpos, ypos, speed, direction);
		this.radius = 40;	
	}

	Ship.inherits(Asteroids.MovingObject);

	Ship.prototype.bindKeys = function() {
		var ship = this;
		key('up', function(){ship.speed +=1 });
  	key('down', function(){ ship.speed -=1 });
  	key('left', function(){ ship.direction += .1745 });
  	key('right', function(){ ship.direction -= .1745 });
	}

	Ship.prototype.draw = function(context) {	
		context.fillStyle   = '#00f';
		context.strokeStyle = '#f00';
		context.lineWidth   = 1;

		context.beginPath();

		 // give the (x,y) coordinates
		var d120 = 2*Math.PI/3;

		var pos1y = Math.sin(this.direction)*this.radius*-1;
		var pos1x = Math.cos(this.direction)*this.radius;
		var pos2y = Math.sin(this.direction-d120)*this.radius*-1;
		var pos2x = Math.cos(this.direction-d120)*this.radius;
		var pos3y = Math.sin(this.direction-2*d120)*this.radius*-1;
		var pos3x = Math.cos(this.direction-2*d120)*this.radius;

		context.moveTo(this.xpos + pos1x, this.ypos + pos1y);
		context.lineTo(this.xpos + pos2x, this.ypos + pos2y);
		context.lineTo(this.xpos + pos3x, this.ypos + pos3y);
		context.lineTo(this.xpos + pos1x, this.ypos + pos1y);
	
		context.fill();
		context.stroke();
		context.closePath();

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
		//x, y, width, height
		// ctx.fillRect(this.xpos-this.radius/2,this.ypos-this.radius/2,this.radius,this.radius);

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

		var bullet = new Asteroids.Bullet(this.xpos+topAdjustment, this.ypos+topAdjustment, velocity);
		return bullet
	}

	return Asteroids
})(Asteroids || {})