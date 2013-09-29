Asteroids = (function(Asteroids){
	var Bullet = Asteroids.Bullet = function Bullet(xpos, ypos, speed, direction) {
		Asteroids.MovingObject.call(this, xpos, ypos, speed, direction);
		this.radius = 3;
	};

	Bullet.inherits(Asteroids.MovingObject);

	Bullet.prototype.draw = function(ctx) {
		ctx.fillStyle = "grey";
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

  Bullet.prototype.hitAsteroid = function(game){
    var astLen = game.asteroids.length;
    var astHit = false

    for (var i = 0; i < astLen; i++) {
      var currentAst = game.asteroids[i];
      if (!!currentAst && this.collision(currentAst)) {
        game.asteroids.splice(i,1);
        this.explode(game);
        astHit = true;
      }
    }

    return astHit
  }

  Bullet.prototype.explode = function(game) {
    game.score += 1;
  }



	return Asteroids
})(Asteroids || {});