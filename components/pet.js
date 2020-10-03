Crafty.c("Pet", {
	init: function() {
        this.addComponent("2D, DOM, Color, Keyboard, Collision");
        this.x = 0;
        this.y = 0;
        this.w = 50;
        this.h = 30;
        this.origin("center")
        this.color("blue")
    }
})	
