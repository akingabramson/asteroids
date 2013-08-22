Function.prototype.inherits = function(parentConstructor) {
	function Surrogate(){}
	Surrogate.prototype = parentConstructor.prototype;
	this.prototype = new Surrogate();
}

Asteroids = {};

Asteroids.MovingObject = (function(MovingObject){
	
	function MovingObject(xpos, ypos, velocity) {	
		this.xpos = xpos, this.ypos = ypos;
		this.velocity = velocity;
	}

	MovingObject.prototype.update = function(){
		this.xpos += this.velocity.x;
		this.ypos += this.velocity.y;
	}

	MovingObject.prototype.offScreen = function(screenBoundx, screenBoundy){
		
		return this.xpos < 0 || this.ypos < 0 || this.xpos > screenBoundx || this.ypos > screenBoundy
	}

	return MovingObject
})(Asteroids.MovingObject || {});


