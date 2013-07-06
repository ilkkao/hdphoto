
var engine;

$(document).ready(function () {
    "use strict";

    engine = new ImgSplitter('images/bg1.jpg');

    engine.drawGrid();
    engine.drawPieces();

    $(window).resize(function() {
        engine.onResize();
        engine.drawGrid();
        engine.drawPieces();
    });
});
