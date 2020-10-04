Crafty.defineScene("Game", function() {

	Crafty.Matter.init({
		// debug : true,
		gravity : {
		  x : 0,
		  y : 0.098
		}
	});
	var level_details = {x:0,y:-200,w:4000,h:1000}
    var background = Crafty.e("Background").place(level_details.x,level_details.y,level_details.w,level_details.h);
    background.set_boundaries();
	var next_level_door = Crafty.e("Door").place(1000,level_details.y+level_details.h-100, true);

	var ballController = Crafty.e("BallController");

	var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
	var hamster = Crafty.e("HamsterWrapper");
    player.attach(wheel);
	hamster.x = 500;
	hamster.y = 100;

	player.x = 500;
	player.y = 100;
	var ball = Crafty.e("Ball");
	ball.x = 550;
	ball.y = 240;


	// var hay = Crafty.e("HayPiece");
	// hay.x = player.x + 50;
	// hay.y = player.y;


	var simp_pf1 = Crafty.e("Platform").place(400,300);
	var simp_pf1 = Crafty.e("Platform").place(650,300);

    var tunnel1 = Crafty.e("Tunnel").place(850,300);
	var simp_pf1 = Crafty.e("Platform").place(1020,300);
	var simp_pf1 = Crafty.e("Platform_Ramp_Right").place(1265,210);
	var simp_pf1 = Crafty.e("Platform").place(2000,170);
	var simp_pf1 = Crafty.e("Platform").place(2250,170);
	var simp_pf1 = Crafty.e("Tunnel").place(2500,170);
	var simp_pf1 = Crafty.e("Tunnel").place(2660,170);
	var simp_pf1 = Crafty.e("Platform_Ramp_Right").place(2910,170);
	var simp_pf1 = Crafty.e("Platform").place(2000,650);
	var simp_pf1 = Crafty.e("Platform").place(2250,550);
	var simp_pf1 = Crafty.e("Platform").place(2500,500);
	var simp_pf1 = Crafty.e("Platform").place(2750,500);
	var simp_pf1 = Crafty.e("Platform").place(3000,500);

	var house = Crafty.e("House").place(1500, 500);

	var rock = Crafty.e("Rock").place(300,600);


    makeCameraTrackEntity(player, 75);

    // Matter.Events.on(Crafty.Matter.engine, 'collisionStart', function (event) {
	// 	 event.pairs.forEach((collision) => {
	// 	    // console.log(collision);
	// 	  });
    // })
        // Matter.Body.setVelocity( player._body, {x : 5, y : 5 });
});
