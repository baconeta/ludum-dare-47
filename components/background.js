Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({
            x: -1000,
            y: -1000,
            z: -100,
            w: 1190 * 100,
            h: 794 * 100
        });
        this.alpha = 0.5;
        this.image("assets/images/background.png", "repeat");
    }
});
Crafty.c("Cage_Top", {
    init: function () {
        this.addComponent('2D, DOM, Color')
    }
})
