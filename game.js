Asteroids.Game = (function(Game){
	function Game(canvas, screenBoundX, screenBoundY){
		this.context = canvas.get(0).getContext("2d");
		this.screenBoundX = screenBoundX;
		this.screenBoundY = screenBoundY;
		this.canvas = canvas;

		this.asteroids = [];
		this.bullets = [];
		this.ship = new Asteroids.Ship(screenBoundX/2, screenBoundY/2, 0, Math.PI/2)

		this.score = 0;
		this.bulletsFired = 0;
	}

	Game.prototype.draw = function(){
		this.context.clearRect(0, 0, this.screenBoundX, this.screenBoundY);
		var astLen = this.asteroids.length;
		for (var i = 0; i < astLen; i++) {
			this.asteroids[i].draw(this.context);
		}
		this.ship.draw(this.context);

		var bullLen = this.bullets.length
		for (var j = 0; j < bullLen; j++) {
			this.bullets[j].draw(this.context);
		}

		this.drawImage();

		$("#score").html(this.score);
		var accuracyPercentage = 100*this.score/this.bulletsFired;
		if (isNaN(accuracyPercentage)){
			accuracyPercentage = 0.000;
		}
		accuracyPercentage = accuracyPercentage.toString().slice(0, 4) + "%";
		$("#accuracy").html(accuracyPercentage);
		
	}

	Game.prototype.drawImage = function(){
		if (this.img) {
			this.img = new Image();
			img.onload = function () {
				this.context
			}
		}
	}

	Game.prototype.start = function(){
		var game = this;
		this.bindkeys();

		this.intervalId = setInterval(function(){
			game.update();
			game.draw();
			game.canvas.css("background-color", "")

			if (game.ship.isHit(game.asteroids)){
				clearInterval(game.intervalId);
				game.canvas.css("background-color", "#990000");
			}
		}, 32);
	}

	Game.prototype.bindkeys = function() {
		this.ship.bindKeys();

		var game = this;
		key('space', function() {
  		game.bullets.push(game.ship.fireBullet());
  		game.bulletsFired += 1;
  	});

	}

	Game.prototype.update = function(){
		while(this.asteroids.length < 10) {
			this.asteroids.push(Asteroids.Asteroid.randomAsteroid(this.screenBoundX, this.screenBoundY));
		};

		for (var i = 0; i < this.asteroids.length; i++){
			this.asteroids[i].update();
		};

		for (var i = 0; i < this.bullets.length; i++){
			this.bullets[i].update();
		};

		this.ship.update(this.screenBoundX, this.screenBoundY);
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
			var currentBullet = this.bullets[i]
			if (!currentBullet.offScreen(this.screenBoundX, this.screenBoundY)&&
				!currentBullet.hitAsteroid(this)){
				newBullets.push(this.bullets[i]);
			}
		};

		this.bullets = newBullets;
	}

	return Game
})(Asteroids.Game || {})
