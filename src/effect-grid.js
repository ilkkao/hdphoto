(function () {
    var delay = 0,
        tiles = -1,
        callback = null,
        first = true;

    function drawPieces(img, x, y) {
        img.style.clip = 'rect(' + y + 'px ' + (x + 100) + 'px ' +
            (y + 100) + 'px ' + x + 'px)';
        img.style.position = 'absolute';
        img.style.top = '0px';
        img.style.left = '0px';
        img.style.display = 'none';
        if (first) {
            img.id = 'currentImage';
            first = false;
        } else {
            img.className = 'gridEffectTmp';
        }

        setTimeout(function() {
            var dir = Math.floor(Math.random() * 4);
            var dx = 0,
                dy = 0,
                offsetX = 0,
                offsetY = 0;

            if (dir == 0) {
                dx = 2000;
            } else if (dir == 1) {
                dx = -2000;
            } else if (dir == 2) {
                dy = 2000;
            } else {
                dy = -2000;
            }

            document.body.appendChild(img);
            engine.setPosition(img, false);

            $(img).css({
                'left': '-=' + dx + 'px',
                'top': '-=' + dy + 'px'
            });

            $(img).show();

            $(img).animate({
                'left': '+=' + dx + 'px',
                'top': '+=' + dy + 'px'
            }, {
                duration: 2000,
                complete: function() {
                    if (--tiles == 0) {
                        $('.gridEffectTmp').remove();
                        $('#currentImage').css({
                            'clip': 'auto'
                        });
                        callback();
                    }
                }
            });
        }, delay);

        delay += 10;
    };

    GridEffect = function() {
        this.w = $(window).width();
        this.h = $(window).height();
    };

    GridEffect.prototype.load = function (url, cb) {
        tiles = (Math.floor(this.h / 100) + 1) * (Math.floor(this.w / 100) + 1);
        callback = cb;

        for (var y = 0; y < this.h; y += 100) {
            for (var x = 0; x < this.w; x += 100) {
                var image = new Image();

                image.onload = (function(a,b,c) {
                    return function() {
                        drawPieces(a, b, c);
                    };
                })(image, x, y);

                image.src = url;
            }
        }
    };
})();
