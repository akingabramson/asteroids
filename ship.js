Asteroids = (function(Asteroids){
	var Ship = Asteroids.Ship = function Ship(xpos, ypos) {
		this.radius = 40;
		xpos = xpos - this.radius/2;
		yois = ypos - this.radius/2;
		Asteroids.MovingObject.call(this, xpos, ypos, {x: 0, y: 0});
		
	}

	Ship.prototype.draw = function(ctx) {
		ctx.fillStyle = "red";
		//x, y, width, height
		ctx.fillRect(this.xpos,this.ypos,this.radius,this.radius);
	}

	Ship.prototype.isHit = function(asteroids) {

		for (var i = 0; i < asteroids.length; i++) {
			var asteroid = asteroids[i];
			var distanceX = asteroid.xpos - this.xpos;
			var distanceY = asteroid.ypos - this.ypos;

			var distance = Math.pow((Math.pow(distanceX, 2) + Math.pow(distanceY, 2)), .5);
			if (distance < 100) {
				console.log(distance);
				console.log(this.radius)
			};
			if (distance < (asteroid.radius + this.radius)) {
				
				return true;
			}
		}
		return false;
	}

	return Asteroids
})(Asteroids || {})