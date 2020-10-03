Crafty.c("Platform", {
	init: function() {
        this.addComponent("2D, DOM, platform");
        this.hitbox = Crafty.e("Platform_Hitbox2");
        this.attach(this.hitbox);
		this.z = -10
    },
	place: function(x, y) {
		this.x = x;
        this.y = y;
		this.hitbox.x = this.x;
		this.hitbox.y = this.y + 6;
        return this;
	}
})

Crafty.c("Platform_Hitbox2", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 246,
            h : 19,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'floor'
            }
        });
    }
})
