Crafty.defineScene("Game", function() {

	var player = Crafty.e("Hamster");
	player.color('red');
	var simp_pf1 = Crafty.e("simple_platform");
	simp_pf1.color = 'green'
	simp_pf1.rotate = 15;
});
