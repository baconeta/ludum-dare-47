Crafty.c("Door", {
    init: function () {
        this.requires('2D, DOM, door');
        this.z = -16;
    },
    place: function (x,y) {
        // Pass coordinates to place door at given location
        this.x = x;
        this.y = y - this.h; //remove height of the ground also
    }
})
