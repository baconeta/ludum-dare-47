Crafty.defineScene("Loading", function() {
    Crafty.e("2D, DOM, Text")
          .attr({ w: 200, h: 50, x: 300, y: 280 })
          .text("Loading...")
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .textColor("#111");

  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
<<<<<<< HEAD
         Crafty.scene('Level8');
=======
         Crafty.scene('Level7');
>>>>>>> ef47c09b61c7d00d25c6fc0862169b8c7ff5162e
       }, 1000);
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
  });
