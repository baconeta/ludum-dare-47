Crafty.c("Platform", {
	init: function() {
        this.addComponent("2D, DOM, platform");
        this.hitbox = Crafty.e("Platform_Hitbox2");
        this.attach(this.hitbox);
		this.z = -15
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
                label : 'platform'
            }
        });
    }
})

Crafty.c("Platform_Ramp_Right", {
	init: function() {
        this.addComponent("2D, DOM, platform_ramp_right");
        this.hitbox = Crafty.e("Platform_Ramp_Right_Hitbox");
        this.attach(this.hitbox);
        this.hitbox.rotation = -17;
		this.z = -10
    },
	place: function(x, y) {
		this.x = x;
        this.y = y;
		this.hitbox.x = this.x;
		this.hitbox.y = this.y + this.h - 77;
        return this;
	}
})

Crafty.c("Platform_Ramp_Right_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 350,
            h : 10,
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
