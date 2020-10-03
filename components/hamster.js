Crafty.c("Hamster", {
	init: function() {
        this.addComponent("2D, DOM, hamster_right, Keyboard, Collision");
        this.x = 0;
        this.y = 0;
        this.origin("center")
        this.bind('KeyDown', function(e) {
          if(e.key == Crafty.keys.LEFT_ARROW) {
            this.ax += -4;
          } else if (e.key == Crafty.keys.RIGHT_ARROW) {
            this.ax += 4;
          } else if (e.key == Crafty.keys.UP_ARROW) {
            this.ay += -4;
          } else if (e.key == Crafty.keys.DOWN_ARROW) {
            this.ay += 4;
          }
    	  });
    }
})
