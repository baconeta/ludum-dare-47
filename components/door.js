Crafty.c("Door", {
    init: function () {
        this.requires('2D, DOM, Color');
        this.z = 2,
        this.h = 150;
        this.w = 25;
        this.color('red');
    },
    place: function (x,y) {
        // Pass coordinates to place door at given location
        this.x = x;
        this.y = y - this.h - 122; //remove height of the ground also
    }
})
