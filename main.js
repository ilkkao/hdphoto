
var engine;

var imageData = {
//    [
//        { id: 'xdvgf',
//          url: 'vcf.com/foo',
//          desc: 'Yosemite ....',
//          date: '3425'
//        }
//    ]
};

$(document).ready(function () {
    "use strict";

    engine = new ImgManager();
    engine.drawGrid();

    var loading = false,
        stretch = true,
        fullscreen = false;

    function goFullscreen() {
        fullscreen = !fullscreen;
        var element = $('body').get(0);

        if (fullscreen) {
            if (element.requestFullScreen) {
                element.requestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            }

            //Wrong, because fullscreen can be deniend
            $('#menuF').css({
                'backgroundColor': '#336699'});
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }

            $('#menuF').css({
                'backgroundColor': 'black'});
        }
    }

    $('#menuF').click(function() {
        goFullscreen();
    });

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
