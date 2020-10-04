Crafty.c("Ball", {
	init: function() {
        this.addComponent("2D, DOM, ball, Matter");
        this.attr({
            x: 0,
            y: 0,
            w: 50,
            h: 50,
            matter: {
                shape : "circle",
            }
        })
    }
})
