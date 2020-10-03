Crafty.defineScene("Game", function() {

  Crafty.Matter.init({
    // debug : true,	
    gravity : {
      x : 0,
      y : 0.098
    }
  });

	var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
	var hamster = Crafty.e("Hamster");
    player.attach(wheel);
	player.attach(hamster)
	hamster.x = 35;
	hamster.y = 90

	var simp_pf1 = Crafty.e("Platform").place(400,300);
	var simp_pf1 = Crafty.e("Platform").place(650,300);
	var simp_pf1 = Crafty.e("Platform").place(900,300);
	var simp_pf1 = Crafty.e("Platform_Ramp_Right").place(1200,200);
	var simp_pf1 = Crafty.e("Platform").place(2000,150);
	var simp_pf1 = Crafty.e("Platform").place(2200,150);
	// var simp_pf2 = Crafty.e("Simple_Platform");
	// var simp_pf3 = Crafty.e("Simple_Platform");
	// simp_pf2.rotation = 5;
	// simp_pf3.rotation = -5;
	// simp_pf3.x += 30;

    var tunnel1 = Crafty.e("Tunnel"); //.place(200,100);


	player.x = 400;
	player.y = 0;
    makeCameraTrackEntity(player, 75);
        // Matter.Body.setVelocity( player._body, {x : 5, y : 5 });
});
