Crafty.defineScene("Game", function() {

  Crafty.Matter.init({
    debug : true,
    gravity : {
      x : 0,
      y : 0.098
    }
  });

	// var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
	var hamster = Crafty.e("Hamster");
    // wheel.attach(wheel);
	wheel.attach(hamster)
	hamster.x = 35;
	hamster.y = 90

	var simp_pf1 = Crafty.e("Simple_Platform");

	wheel.x = 400;
	// simp_pf1.rotation = -25;
    makeCameraTrackEntity(wheel, 75);
});
