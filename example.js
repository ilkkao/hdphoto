
var engine;

$(document).ready(function () {
    "use strict";

    engine = new ImgSplitter('images/bg1.jpg');
    engine.drawGrid();

    function drawPieces(img, x, y) {
        setTimeout(function() {
            document.body.appendChild(img);
            img.id = x + x * y;

            $('#' + img.id).fadeIn(1000);
        }, Math.floor(Math.random() * 15000));
    };

    engine.split(drawPieces);

    $(window).resize(function() {
        engine.onResize();
        engine.drawGrid();
        engine.split(drawPieces);
    });
});
