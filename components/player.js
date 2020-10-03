Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Keyboard, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 160,
            h : 160,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                label : 'player'
            }
        });
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
    	})
    }
})
