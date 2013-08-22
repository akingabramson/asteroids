Asteroids.Game = (function(Game){
	function Game(context, screenBoundX, screenBoundY){
		this.context = context;
		this.screenBoundX = screenBoundX;
		this.screenBoundY = screenBoundY;

		this.asteroids = [];
		this.ship = new Asteroids.Ship(screenBoundX/2, screenBoundY/2)

		for (var i = 0; i < 10; i++){
			this.asteroids.push(Asteroids.Asteroid.randomAsteroid(screenBoundX, screenBoundY));
		}
	}

	Game.prototype.draw = function(){
		var astLen = this.asteroids.length
		this.context.clearRect(0, 0, this.screenBoundX, this.screenBoundY);
		for (var i = 0; i < astLen; i++) {
			this.asteroids[i].draw(this.context);
		}
		this.ship.draw(this.context);
	}

	Game.prototype.start = function(){
		var game = this;
		this.intervalId = setInterval(function(){
			game.update();
			game.draw();
		}, 50);
	}

	Game.prototype.update = function(){
		for (var i = 0; i < this.asteroids.length; i++){
			this.asteroids[i].update();
		}
		if (this.ship.isHit(this.asteroids)){
			clearInterval(this.intervalId);
			alert("Game Over");
		}
		this.removeRoids();
	}

	Game.prototype.removeRoids = function(){
		var newAsts = []

		for (var i = 0; i < this.asteroids.length; i++){
			if (!this.asteroids[i].offScreen(this.screenBoundX, this.screenBoundY)){
				newAsts.push(this.asteroids[i]);
			}
		}

		this.asteroids = newAsts;
	}

	return Game
})(Asteroids.Game || {})
