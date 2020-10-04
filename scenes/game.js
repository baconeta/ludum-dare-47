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

	var ball = Crafty.e("Ball");
	ball.x = 550;
	ball.y = 240;
	var hay = Crafty.e("Hay");
	hay.x = -1* (hay.w/2);
	hay.y = 1000;

	var simp_pf1 = Crafty.e("Platform").place(400,300);
	var simp_pf1 = Crafty.e("Platform").place(650,300);
    var tunnel1 = Crafty.e("Tunnel").place(850,300);
	var simp_pf1 = Crafty.e("Platform").place(1020,300);
	var simp_pf1 = Crafty.e("Platform_Ramp_Right").place(1265,210);
	var simp_pf1 = Crafty.e("Platform").place(2000,170);
	var simp_pf1 = Crafty.e("Platform").place(2250,170);
	var simp_pf1 = Crafty.e("Tunnel").place(2500,170);
	var simp_pf1 = Crafty.e("Platform").place(2600,100);
	var simp_pf1 = Crafty.e("Tunnel").place(2660,170);
	var simp_pf1 = Crafty.e("Platform_Ramp_Right").place(2810,170);
	var simp_pf1 = Crafty.e("Platform").place(2000,650);
	var simp_pf1 = Crafty.e("Platform").place(2250,650);
	var simp_pf1 = Crafty.e("Platform").place(2500,600);
	var simp_pf1 = Crafty.e("Platform").place(2750,600);
	var simp_pf1 = Crafty.e("Platform").place(3000,600);

	player.x = 400;
	player.y = 0;
    makeCameraTrackEntity(player, 75);
        // Matter.Body.setVelocity( player._body, {x : 5, y : 5 });
});
