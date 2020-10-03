Crafty.c("Hamster", {
	init: function() {
        this.addComponent("2D, DOM, Color, Keyboard, AngularMotion");
        this.x = 0;
        this.y = 0;
        this.w = 4;
        this.h = 4;
        this.color("red")
        this.origin("center")
        this.hamsterInner = Crafty.e("HamsterImage")
        this.hamsterInner.x = this.x - this.hamsterInner.w/2;
        this.hamsterInner.y = this.y + 10;
        this.attach(this.hamsterInner)
        this.bind('PlayerVelocity', function(e) {
            if(-100 < this.vrotation && this.vrotation < 100) {
                this.vrotation = e.x * -10;
            }
        });
    }
})

Crafty.c("HamsterImage", {
    init: function() {
        this.addComponent("2D, DOM, hamster_right, Keyboard, Collision, AngularMotion");
        this.x = 0;
        this.y = 0;
        this.origin("center")
        this.bind('KeyDown', function(e) {
          if(e.key == Crafty.keys.LEFT_ARROW) {
            this.addComponent("hamster_left")
            this.removeComponent("hamster_right")
          } else if (e.key == Crafty.keys.RIGHT_ARROW) {
            this.removeComponent("hamster_left")
            this.addComponent("hamster_right")
          }
        });
    }
})
