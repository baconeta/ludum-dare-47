Crafty.c("Ramp_Platform", {
	init: function() {
        this.addComponent("2D, DOM, ramp");
        this.hitbox = Crafty.e("Ramp_Hitbox");
        this.attach(this.hitbox);
		this.z = -10
    },
	place: function(x, y) {
		this.x = x;
		this.y = y;
		this.hitbox.x = this.x;
		this.hitbox.y = this.y+60;
        return this;
	}
})
