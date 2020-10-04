Crafty.c("Door", {
    init: function () {
        this.requires('2D, DOM, door');
        this.z = -16;
    },
    place: function (x,y,isLocked) {
        // Pass coordinates to place door at given location
        this.x = x;
        this.y = y - this.h; //remove height of the ground also
        if (isLocked == true) {
            this.lock = Crafty.e()
            //ATTACH LOCK TO DOOR
            //CO-ORDINATE LOCK AND DOOR
        }
    }
})

Crafty.c("Lock", {
    init: function () {
        this.addComponent('2D, DOM, lock');
        this.z = -16;
    }
})
