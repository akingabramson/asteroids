Asteroids.Asteroid = (function(Asteroid){
	function Asteroid(xpos, ypos, speed, direction){
		Asteroids.MovingObject.call(this, xpos, ypos, speed, direction);
		this.radius = 10;
	}

	Asteroid.inherits(Asteroids.MovingObject);

	Asteroid.randomAsteroid = function(screenBoundx, screenBoundy) {

		var positionsDirections = this.getStartPosition(screenBoundx, screenBoundy);
		var xpos = positionsDirections[0], ypos = positionsDirections[1];
		var direction = positionsDirections[2], xIsSet = positionsDirections[3];

		if (xIsSet) {
			ypos = Math.random()*screenBoundy;
		} else {
			xpos = Math.random()*screenBoundx;
		}

		var speed = Math.random()*3;
		return new Asteroid(xpos, ypos, speed, direction);
	}

	Asteroid.getStartPosition = function(screenBoundx, screenBoundy) {
		var xpos, ypos;
		var xIsSet = false;
		var direction = Math.random()*2*Math.PI;
		var screenCorner = Math.floor(Math.random()*4);

		switch(screenCorner) {
			case 0:
				xpos = 0;

				// if it's between 90 and 270 degrees
				if (Math.PI/2 < direction && direction < 3*Math.PI/2) {
					direction = Math.random()*Math.PI + Math.PI*3/2;
					// direction needs to be going right
				}
				xIsSet = true;
				break;
			case 1:
				xpos = screenBoundx;

				// if it's between 270 and 90
				if (3*Math.PI/2 < direction || direction < Math.PI/2) {
					direction = Math.random()*Math.PI + Math.PI/2;
					// direction needs to be going left
				}
				xIsSet = true;
				break;
			case 2:
				ypos = 0;
				if (0 < direction && direction < Math.PI) {
					direction = Math.random()*Math.PI + Math.PI;
					// direction needs to be going down
				}
				break;
			case 3:
				ypos = screenBoundy;
				if (Math.PI < direction) {
					direction = Math.random()*Math.PI;
					// direction needs to be going up
				}
				break;
			default:
				alert("Whoops! Postions weren't assigned correctly");
		}

		return [xpos, ypos, direction, xIsSet]
	}

	Asteroid.prototype.draw = function(ctx) {
		ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(
      this.xpos,
      this.ypos,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.closePath();
    ctx.fill();	
	}

	return Asteroid;
})(Asteroids.Asteroid || {});


