Crafty.defineScene("Game", function() {

	var player = Crafty.e("Player");
	player.color('red')
	var wheel = Crafty.e("Wheel");
	player.attach(wheel);
	var hamster = Crafty.e("Hamster");
	player.attach(hamster)
	hamster.x = 25;
	hamster.y = 60;

	var simp_pf1 = Crafty.e("Simple_Platform");
});
