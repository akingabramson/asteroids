Asteroids.Asteroid = (function(Asteroid){
	function Asteroid(xpos, ypos, velocity){
		Asteroids.MovingObject.call(this, xpos, ypos, velocity);
		this.radius = 3;
	}

	Asteroid.inherits(Asteroids.MovingObject);

	Asteroid.randomAsteroid = function(screenBoundx, screenBoundy) {

		var velMagnifier = 3;
		var screenCorner = Math.floor(Math.random()*4);
		var xIsSet = false;

		var xpos, ypos, velx, vely;
		switch(screenCorner) {
			case 0:
				xpos = 0;
				velx = Math.random()*velMagnifier;
				xIsSet = true;
				break;
			case 1:
				xpos = screenBoundx;
				velx = Math.random()*velMagnifier*-1
				xIsSet = true;
				break;
			case 2:
				ypos = 0;
				vely = Math.random()*velMagnifier
				break;
			case 3:
				ypos = screenBoundy;
				vely = Math.random()*velMagnifier*-1
				break;
			default:

				alert("Whoops! Postions weren't assigned correctly");
		}

		var posNeg = Math.random() < .5 ? -1 : 1;
		if (xIsSet) {
			ypos = Math.random()*screenBoundy;
			vely = Math.random()*3*posNeg;
		} else {
			xpos = Math.random()*screenBoundx;
			velx = Math.random()*3*posNeg;
		}

		var velocity = {x: velx, y: vely}
		return new Asteroid(xpos, ypos, velocity);
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


