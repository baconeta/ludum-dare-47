Crafty.c("Simple_Platform", {
	init: function() {
        this.addComponent("2D, DOM, Color, solid, WiredHitBox, Matter");
        this.attr({  // for the moment it requires of all the four pos parameters
            x : -300,
            y : 450,
            w : 1500,
            h : 2000,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'floor'
            }
        });
        this.color('brown');
        this.debugStroke('black');
    }
})
