Crafty.c("Platform_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({  // for the moment it requires of all the four pos parameters
            x : 0,
            y : 0,
            w : 349,
            h : 61,
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
