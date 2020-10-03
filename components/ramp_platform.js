Crafty.c("Ramp_Platform", {
	init: function() {
        this.addComponent("Simple_Platform");
    },
    angle: function(angle) {
    	this.rotation = angle;
    	return this;
    }
})
