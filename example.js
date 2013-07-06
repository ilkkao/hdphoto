
var engine;

$(document).ready(function () {
    "use strict";

    engine = new ImgSplitter('images/bg1.jpg');
    engine.drawGrid();

    var delay = 0,
        id = 0;

    function drawPieces(img, x, y) {
        setTimeout(function() {
            img.id = id++;

            var dir = Math.floor(Math.random() * 4);
            var dx = 0,
                dy = 0;

            if (dir == 0) {
                dx = 2000;
            } else if (dir == 1) {
                dx = -2000;
            } else if (dir == 2) {
                dy = 2000;
            } else {
                dy = -2000;
            }

            console.log(x, y);

            document.body.appendChild(img);
            $('#' + img.id).show();

            $('#' + img.id).css({
                'left': '-=' + dx + 'px',
                'top': '-=' + dy + 'px'
            });

            $('#' + img.id).animate({
                'left': '+=' + dx + 'px',
                'top': '+=' + dy + 'px'
            }, {
            duration: 3000,
            easing: 'swing'});
        }, delay);

        delay += 20;
    };

    engine.split(drawPieces);

    $(window).resize(function() {
        engine.onResize();
        engine.drawGrid();
        engine.split(drawPieces);
    });
});
