Crafty.c("Ramp_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter, Color");
        this.attr({  // for the moment it requires of all the four pos parameters
            x : 0,
            y : 0,
            w : 749,
            h : 61,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'floor'
            }
        });
        this.color("red")
    }
})
