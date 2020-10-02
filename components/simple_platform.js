Crafty.c("simple_platform", {
	init: function() {
        this.addComponent("2D, DOM, Color, Image, solid, Collision");
        this.rotation = 15;
        this.color('green');
        this.x = -300;
        this.y = 150;
        this.w = 1500;
        this.h = 10;
    }
})
