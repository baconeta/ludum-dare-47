Crafty.defineScene("EndScreen", function() {
// To have a background, play button, set-up functionality, music/mute once implemented
    var gameStartBackground = Crafty.e("EndBackground");
    // gameStartBackground.bind('Click', function() {
    //     if (Crafty.audio.isPlaying("bgAudio") == false) {
    //         audioController.loadTrack("bgAudio", -1, 0.25);
    //     }
    // })
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_again_button")
        .attr({
            x: GAME_SCREEN_WIDTH/2-65,
            y: GAME_SCREEN_HEIGHT/2-100,
            w: 141,
            h: 51
        })
        .bind('Click', function(MouseEvent){
                // audioController.playTrack("jump2,", 1, 0.3)
                // if (Crafty.audio.isPlaying("bgAudio") == false) {
                //     audioController.loadTrack("bgAudio", -1, 0.25);
                // }
                Crafty.scene('Game');
        });
});

Crafty.c("EndBackground", {
    init: function () {
        this.requires('2D, DOM, Mouse, end_screen');
        this.attr({x: 0, y: 0, w: 900, h: 600});
        this.vx -= 1;
    }
});
