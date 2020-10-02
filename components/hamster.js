Crafty.c("Hamster", {
	init: function() {
        this.addComponent("2D, DOM, Color, Delay, Image, Twoway,  SpriteAnimation, Gravity, Collision, player");
        this.x = 0;
        this.y = 0;
        this.w = 314 / 5;
        this.h = 429 / 5;
		this.gravity("solid");

		// This is a rectangle hitbox slightly in from the sprite of the player.
        this.collision([
        	0 + (this.w/6), 10,
         	this.w - (this.w/6), 10,
         	this.w - (this.w/6), this.h - 10,
         	0 + (this.w/6), this.h - 10
        ]);
