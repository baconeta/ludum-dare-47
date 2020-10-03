Crafty.defineScene("Game", function() {

	var player = Crafty.e("Hamster");
	player.color('red')
	var wheel = Crafty.e("Wheel");
	player.attach(wheel);
	var pet = Crafty.e("Pet");
	player.attach(pet)
	pet.x = 25;
	pet.y = 60;

	var simp_pf1 = Crafty.e("simple_platform");
	simp_pf1.color('green')

});
