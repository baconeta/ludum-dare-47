Crafty.defineScene("Game", function() {

	var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
	player.attach(wheel);
	var hamster = Crafty.e("Hamster");
	player.attach(hamster)
	hamster.x = 60;
	hamster.y = 120

	var simp_pf1 = Crafty.e("Simple_Platform");
});
