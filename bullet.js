Asteroids = (function(Asteroids){
	var Bullet = Asteroids.Bullet = function Bullet(xpos, ypos, speed, direction) {
		Asteroids.MovingObject.call(this, xpos, ypos, velocity);
		this.radius = 3;
	};

	Bullet.inherits(Asteroids.MovingObject);

	Bullet.prototype.draw = function(ctx) {
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
    console.log("yay")
	}



	return Asteroids
})(Asteroids || {});