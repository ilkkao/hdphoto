
var engine;

$(document).ready(function () {
    "use strict";

    engine = new ImgManager();
    engine.drawGrid();

    var id = 0;

    engine.load('images/bg1.jpg', 'grid');

    $(window).resize(function() {
        engine.onResize();
        engine.drawGrid();
        //TODO: engine.split(drawPieces);
    });
});
