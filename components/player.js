Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Keyboard");
        this.attr({
            x : 0,
            y : 0,
            w : 160,
            h : 160,
            z :2,
        });
    }
})
