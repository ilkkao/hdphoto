
var engine;

$(document).ready(function () {
    "use strict";

    engine = new ImagePuzzle();

    engine.onResize();
    engine.drawPieces();

    $(window).resize(function() {
        engine.onResize();
        engine.drawPieces();
    });
});
