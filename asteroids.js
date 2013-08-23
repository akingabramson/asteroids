Function.prototype.inherits = function(parentConstructor) {
	function Surrogate(){}
	Surrogate.prototype = parentConstructor.prototype;
	this.prototype = new Surrogate();
}

Asteroids = {};

Asteroids.MovingObject = (function(MovingObject){
	
	function MovingObject(xpos, ypos, speed, direction) {	
		this.xpos = xpos, this.ypos = ypos; this.speed = speed; this.direction = direction;
	}

	MovingObject.prototype.update = function(){
		this.xpos += this.speed*Math.cos(this.direction);
		this.ypos -= this.speed*Math.sin(this.direction);
		this.headx = this.xpos + Math.cos(this.direction)*this.radius;
		this.heady = this.ypos - Math.sin(this.direction)*this.radius;
	}

	MovingObject.prototype.offScreen = function(screenBoundx, screenBoundy){		
		return this.xpos < 0 || this.ypos < 0 || this.xpos > screenBoundx || this.ypos > screenBoundy
	}

	MovingObject.prototype.collision = function(otherObject) {
		var distanceX = Math.abs(otherObject.xpos - this.xpos);
		var distanceY = Math.abs(otherObject.ypos - this.ypos);

		return (distanceY < (otherObject.radius + this.radius/2))&&(distanceX < (otherObject.radius + this.radius/2))
	}

	return MovingObject
})(Asteroids.MovingObject || {});


