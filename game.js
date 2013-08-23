Asteroids.Game = (function(Game){
	function Game(context, screenBoundX, screenBoundY){
		this.context = context;
		this.screenBoundX = screenBoundX;
		this.screenBoundY = screenBoundY;

		this.asteroids = [];
		this.bullets = [];
		this.ship = new Asteroids.Ship(screenBoundX/2, screenBoundY/2, 0, Math.PI/2)

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

		var bullLen = this.bullets.length

		for (var j = 0; j < bullLen; j++) {
			this.bullets[j].draw(this.context);
		}
	}

	Game.prototype.start = function(){
		var game = this;
		this.bindkeys();

		this.intervalId = setInterval(function(){
			game.update();
			game.draw();
			if (game.ship.isHit(game.asteroids)){
			clearInterval(game.intervalId);
			alert("Game Over");
			}
		}, 20);
	}

	Game.prototype.bindkeys = function() {
		this.ship.bindKeys();

		var game = this;
		key('space', function() {
  		game.bullets.push(game.ship.fireBullet());
  	});

	}

	Game.prototype.update = function(){
		for (var i = 0; i < this.asteroids.length; i++){
			this.asteroids[i].update();
		};

		for (var i = 0; i < this.bullets.length; i++){
			this.bullets[i].update();
		};

		this.ship.update();
		this.removeRoids();
		this.removeBullets();
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

	Game.prototype.removeBullets = function(){
		var newBullets = []

		for (var i = 0; i < this.bullets.length; i++){
			if (!this.bullets[i].offScreen(this.screenBoundX, this.screenBoundY)){
				newBullets.push(this.bullets[i]);
			}
		};

		this.bullets = newBullets;
	}

	return Game
})(Asteroids.Game || {})
