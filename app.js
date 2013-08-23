

$(function () {
	var width = 500;
	var height = 500;
  var canvas = $("<canvas width='" + width + 
                 "' height='" + height + "'></canvas>");
  $('body').append(canvas);

  // `canvas.get(0)` unwraps the jQuery'd DOM element;
  var game = new Asteroids.Game(canvas.get(0).getContext("2d"), width, height);
  game.start();


});
