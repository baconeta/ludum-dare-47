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
		this.holding_key = false;
		this.force_level_x = 0;
        this.bind('KeyDown', function(e) {
		    if(e.key == Crafty.keys.LEFT_ARROW) {
				this.holding_key = true;
				this.direction_force = 10
				this.force_level_x = -5
		    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.directional_force = -10
				this.force_level_x = 5
				this.holding_key = true;
			}
    	});
		this.bind('KeyUp', function(e) {
			if(e.key == Crafty.keys.LEFT_ARROW || e.key == Crafty.keys.RIGHT_ARROW) {
				this.holding_key = false;
		}
		});
        this.bind('EnterFrame', function(e) {
            Crafty.trigger("PlayerVelocity", this._body.velocity);
			if (this.holding_key == true) {
				Matter.Body.applyForce(this._body, {x: this.x+this.direction_force, y: this.y+5}, {x: this.force_level_x, y: 0});
			}
        });
    }
})
