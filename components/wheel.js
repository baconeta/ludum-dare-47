Crafty.c("Wheel", {
	init: function() {
        this.addComponent("2D, DOM, Keyboard, SpriteAnimation, wheel, Matter");
        this.x = 0;
        this.y = 0;
        this.attr({
            x : 0,
            y : 0,
            w : 160,
            h : 160,
            z :2,
            matter : {
                friction : 0,
                density : 0.1,
                shape: 'circle',
                label : 'player'
            }
        });

     //    this.bind('KeyDown', function(e) {
		   //  if(e.key == Crafty.keys.LEFT_ARROW) {
		   //    	this.rotation += -10;
		   //  } else if (e.key == Crafty.keys.RIGHT_ARROW) {
		   //    	this.rotation += 10;
		  	// }
    	// });

        this.bind('KeyDown', function(e) {
            if(e.key == Crafty.keys.LEFT_ARROW) {
                Matter.Body.setAngularVelocity(this._body, -0.1);
                Matter.Body.setVelocity( this._body, {x : -5, y : 5 });
            } else if (e.key == Crafty.keys.RIGHT_ARROW) {
                Matter.Body.setAngularVelocity(this._body, 0.1);
                Matter.Body.setVelocity( this._body, {x : 5, y : 5 });
            } else if (e.key == Crafty.keys.UP_ARROW) {
                this.ay += -4;
            } else if (e.key == Crafty.keys.DOWN_ARROW) {
                this.ay += 4;
            }
        })
    }
})
