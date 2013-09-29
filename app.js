
$(function () {
	var width = 800;
	var height = 400;
  var canvas = $("<canvas id='game-canvas' width='" + width + 
                 "' height='" + height + "'></canvas>");
  $('#game').append(canvas);

  // `canvas.get(0)` unwraps the jQuery'd DOM element;
  var game = new Asteroids.Game(canvas.get(0).getContext("2d"), width, height);

  
  game.start();


});
