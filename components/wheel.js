Crafty.c("Wheel", {
	init: function() {
        this.addComponent("2D, DOM, Keyboard, SpriteAnimation, wheel");
        this.x = 0;
        this.y = 0;
        this.origin("center")

        this.bind('KeyDown', function(e) {
		    if(e.key == Crafty.keys.LEFT_ARROW) {
		      	this.rotation += -10;
		    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
		      	this.rotation += 10;
		  	}
    	});
    }
})
