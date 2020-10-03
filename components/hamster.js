Crafty.c("Hamster", {
	init: function() {
        this.addComponent("2D, DOM, hamster_right, Keyboard, Collision");
        this.x = 0;
        this.y = 0;
        this.w = 50;
        this.h = 30;
        this.origin("center")
    }
})
