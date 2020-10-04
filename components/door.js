Crafty.c("Door", {
    init: function () {
        this.requires('2D, DOM, door');
        this.z = -16;
        this.w = 258;
        this.h = 363;
        this.handle = Crafty.e("Door_Handle");
        this.handle.x = this.x+22;
        this.handle.y = this.y+ 187;
        this.attach(this.handle);
    },
    place: function (x,y,isLocked) {
        // Pass coordinates to place door at given location
        this.x = x;
        this.y = y - this.h; //remove height of the ground also
        if (isLocked == true) {
            this.lock = Crafty.e("Lock");
            this.attach(this.lock);
            this.lock.x = this.x+9;
            this.lock.y = this.y+208;
        }
    }
}),

Crafty.c("Lock", {
    init: function () {
        this.addComponent('2D, DOM, lock, Collision');
        this.z = -15;
    }
}),

Crafty.c("Door_Handle", {
    init: function () {
        this.addComponent('2D, DOM, door_handle');
        this.z = -14;
        this.w = 21;
        this.h = 46;
    }
})
