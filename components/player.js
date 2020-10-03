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
                shape: 'circle',
                label : 'player'
            }
        });
        this.bind('KeyDown', function(e) {
		    if(e.key == Crafty.keys.LEFT_ARROW) {
				Matter.Body.applyForce(this._body, {x: this.x+10, y: this.y}, {x: -30, y: 0});
		    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
				Matter.Body.applyForce(this._body, {x: this.x-10, y: this.y}, {x: 30, y: 0});		    }
    	})
        this.bind('EnterFrame', function(e) {
            Crafty.trigger("PlayerVelocity", this._body.velocity);
        });
    }
})
