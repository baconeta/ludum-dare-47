Crafty.defineScene("Level3", function() {

    // Create level information basics //
    var level_details = {x:-150,y:0,w:3150,h:1400}
    var background = Crafty.e("Background").place(level_details.x,level_details.y,level_details.w,level_details.h);
    background.set_boundaries();
    var next_level_door = Crafty.e("Door").place(2650,level_details.y+400, false); //Give the door a location (the y parameters are set cleanly for the floor here)
    var next_level_loading = false;
    Crafty.bind("NextLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            setTimeout(function () {
                Crafty.scene("Level3");
            }, 500);
        }
    });

    // Object and obstacle placements //
    var ramp = Crafty.e("Small_Ramp_Right").place(900,620);
    var platform = Crafty.e("Platform").place(400,1200);
    var ramp = Crafty.e("Platform_Ramp_Right").place(75,1212);
    var platform = Crafty.e("Platform").place(2400,400);
    var platform = Crafty.e("Platform").place(2650,400);
    var platform = Crafty.e("Platform").place(1330,650);
    var platform = Crafty.e("Platform").place(1080,650);
    var ramp = Crafty.e("Platform_Ramp_Right").place(1600,555);
    ramp.rotation = -10;
    var ramp = Crafty.e("Platform_Ramp_Right").place(655,1100);
    var ramp = Crafty.e("Platform_Ramp_Left").place(1250,1080);
    ramp.rotation = 7;
    //var platform = Crafty.e("Platform").place(1600,1175);
    var platform = Crafty.e("Platform_Ramp_Left").place(1570,1240);
    ramp.rotation = 9;
    var platform = Crafty.e("Platform").place(10,1000);
    var ramp = Crafty.e("Small_Ramp_Right").place(230,915);
    ramp.rotation = -18;

    // Hamster and Wheel Code //
    var hamster = Crafty.e("HamsterWrapper");
    var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
    player.attach(wheel);
	player.x = 15;
	player.y = 1100;
    makeCameraTrackEntity(player, 75);

    // Ball and Key Code //

})
