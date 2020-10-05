Crafty.defineScene("Title", function() {
// To have a background, play button, set-up functionality, music/mute once implemented
    var gameStartBackground = Crafty.e("StartBackground");
    // gameStartBackground.bind('Click', function() {
    //     if (Crafty.audio.isPlaying("bgAudio") == false) {
    //         audioController.loadTrack("bgAudio", -1, 0.25);
    //     }
    // })
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, Color, playbutton")
        .attr({x: GAME_SCREEN_WIDTH/2-75, y: GAME_SCREEN_HEIGHT/2+25})
        .bind('Click', function(MouseEvent){
                // audioController.playTrack("jump2,", 1, 0.3)
                // if (Crafty.audio.isPlaying("bgAudio") == false) {
                //     audioController.loadTrack("bgAudio", -1, 0.25);
                // }
                Crafty.scene('Game');
        });
    playGameButton.w = 140;
    playGameButton.h = 50;
    playGameButton.color('red');
});

Crafty.c("StartBackground", {
    init: function () {
        this.requires('2D, DOM, Mouse, title_screen');
        this.attr({x: 0, y: 0, w: 900, h: 600});
        this.vx -= 1;
    }
});
