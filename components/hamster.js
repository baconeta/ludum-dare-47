Crafty.c("Hamster", {
	init: function() {
        this.addComponent("2D, DOM, hamster_right, Keyboard, Collision");
        this.x = 0;
        this.y = 0;
		this.w = 88;
		this.h = 59;
        this.origin("center")
        this.bind('KeyDown', function(e) {
          if(e.key == Crafty.keys.LEFT_ARROW) {
			this.addComponent("hamster_left")
			this.removeComponent("hamster_right")
			this.w = 88;
			this.h = 59;
          } else if (e.key == Crafty.keys.RIGHT_ARROW) {
			this.removeComponent("hamster_left")
			this.addComponent("hamster_right")
			this.w = 88;
			this.h = 59;
          }
	  });
    }
})
