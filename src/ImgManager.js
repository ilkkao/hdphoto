(function () {

    ImgManager = function() {
        this.w = $(window).width();
        this.h = $(window).height();
        this.stretch = true;

        this.ctx = $('#grid')[0].getContext('2d');
    };

    ImgManager.prototype.drawLine = function (x, y, n, m, w) {
        this.ctx.lineWidth = w;
        this.ctx.strokeStyle = '#282828';

        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(n, m);
        this.ctx.stroke();
    };

    ImgManager.prototype.drawGrid = function () {
        var spacing = 20;

        //Configure canvas
        $('#grid').width(this.w).height(this.h);
        $('#grid').attr('width', this.w).attr('height', this.h);

        for (var i = 0; i < this.h; i += spacing) {
            this.drawLine(0, i, this.w, i, i % 100 ? 0.7 : 1);
        }

        for (i = 0; i < this.w; i += spacing) {
            this.drawLine(i, 0, i, this.h, i % 100 ? 0.7 : 1);
        }
    };

    ImgManager.prototype.load = function (url, effect, callback) {
        var effectManager;

        if (effect == 'grid') {
            effectManager = new GridEffect();
        } else if (effect == 'fadein') {
            effectManager = new FadeInEffect();
        }

        effectManager.load(url, function() {
            callback();
            console.log('Image loaded.');
        });
    };

    ImgManager.prototype.setStretch = function (mode) {
        this.stretch = mode;
    };

    ImgManager.prototype.setPosition = function (img, animate) {
        var screenAR = this.w / this.h,
            imgAR = $(img).width() / $(img).height(),
            left = 0,
            top = 0,
            width = this.w,
            height = this.h;

        console.log(imgAR);

        if (imgAR > screenAR) {
            if (this.stretch) {
                width = this.h * imgAR;
                left = (this.w - width) / 2;
            } else {
                height = this.w / imgAR;
                top = (this.h - height) / 2;
            }
        } else {
            if (this.stretch) {
                height = this.w / imgAR;
                top = (this.h - height) / 2;
            } else {
                width = this.h * imgAR;
                left = (this.w - width) / 2;
            }
        }

        var newValues = {
            'width': width + 'px',
            'height': height + 'px',
            'left': left + 'px',
            'top': top + 'px'
        };

        if (animate) {
            $(img).animate(newValues, {
                duration: 1000
            });
        } else {
            $(img).css(newValues);
        }
    };

    ImgManager.prototype.onResize = function () {
        this.w = $(window).width();
        this.h = $(window).height();
    };

})();
