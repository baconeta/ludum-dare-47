Crafty.c("Simple_Platform", {
	init: function() {
        this.addComponent("2D, DOM, Color, solid, WiredHitBox, Matter");
        this.x = -300;
        this.y = 450;
        this.w = 1500;
        this.h = 2000;
        this.color('brown');
        this.debugStroke('black');
        this.matter = {
            isStatic : true
        }
    }
})
