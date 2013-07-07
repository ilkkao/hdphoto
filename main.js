
var engine;

$(document).ready(function () {
    "use strict";

    engine = new ImgManager();
    engine.drawGrid();

    var loading = false;
    var stretch = true;

    $('#menu1').click(function() {
        stretch = !stretch;

        if (stretch) {
            $('#menu1').css({
                'backgroundColor': '#336699'});
        } else {
            $('#menu1').css({
                'backgroundColor': 'black'});
        }

        engine.setStretch(stretch);
        engine.setPosition($('#currentImage').get(0), true);
    });

    $('#menu2').click(function() {
        if (!loading) {
            $('#currentImage').remove();
            loading = true;
            engine.load('images/bg1.jpg', 'grid', function() {
                loading = false;
            });
        }
    });

    $('#menu3').click(function() {
        if (!loading) {
            $('#currentImage').remove();
            loading = true;
            engine.load('images/bg2.jpg', 'fadein', function () {
                loading = false;
            });
        }
    });

    $(window).resize(function() {
        engine.onResize();
        engine.drawGrid();
        //TODO: engine.split(drawPieces);
    });
});
