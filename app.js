
$(function () {
	var width = 800;
	var height = 400;
  var canvas = $("<canvas id='game-canvas' width='" + width + 
                 "' height='" + height + "'></canvas>");
  $('#game').append(canvas);
	
	game = new Asteroids.Game(canvas, width, height);
  // `canvas.get(0)` unwraps the jQuery'd DOM element;


  $("html").keyup(function(e){
  	if (e.keyCode == '13') {
  		clearInterval(game.intervalId);
  		game = new Asteroids.Game(canvas, width, height);
  		game.start();
  	}
  });

});
