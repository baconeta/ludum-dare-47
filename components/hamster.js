Crafty.c("Hamster", {
	init: function() {
        this.addComponent("2D, DOM, Color, Keyboard, Collision, Gravity");
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = 100;
        this.origin("center")
        this.color("rgba(0, 255, 0, 0.2)");
        this.gravity("solid");
        this.bind('KeyDown', function(e) {
		    if(e.key == Crafty.keys.LEFT_ARROW) {
		    	this.ax += -4;
		    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
		    	this.ax += 4;
		    } else if (e.key == Crafty.keys.UP_ARROW) {
		    	this.ay += -4;
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
		    	this.ay += 4;
		    }
    	});
    }
})	
