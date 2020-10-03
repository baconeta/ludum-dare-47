Crafty.defineScene("Game", function() {

  Crafty.Matter.init({
    debug : true,
    gravity : {
      x : 0,
      y : 0.098
    }
  });
  
	var player = Crafty.e("Player");

	var wheel = Crafty.e("Wheel");
	player.attach(wheel);
	var hamster = Crafty.e("Hamster");
	player.attach(hamster)
	hamster.x = 35;
	hamster.y = 90

	var simp_pf1 = Crafty.e("Simple_Platform");
});
