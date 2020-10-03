Crafty.c("Simple_Platform", {
	init: function() {
        this.addComponent("2D, DOM, Color, solid, WiredHitBox");
        this.x = -300;
        this.y = 250;
        this.w = 1500;
        this.h = 10;
        this.rotation = 15;
        this.color('green');
        this.debugStroke('black');
    }
})
