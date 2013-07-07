(function () {

    ImgManager = function() {
        this.w = $(window).width();
        this.h = $(window).height();

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
        //Configure canvas
        $('#grid').width(this.w).height(this.h);
        $('#grid').attr('width', this.w).attr('height', this.h);

        var spacing = 20; // + ((this.w % 100 ) / Math.floor(this.w / 20));
        console.log('Spacing is: ', spacing);

        for (var i = 0; i < this.h; i += spacing) {
            this.drawLine(0, i, this.w, i, i % 100 ? 0.7 : 1);
        }

        for (i = 0; i < this.w; i += spacing) {
            this.drawLine(i, 0, i, this.h, i % 100 ? 0.7 : 1);
        }
    };

    ImgManager.prototype.load = function (url, effect) {
        var effectManager;

        if (effect == 'grid') {
            effectManager = new GridEffect();
        } else if (effect == 'fadein') {
            effectManager = new FadeInEffect();
        }

        effectManager.load(url, function() {
            console.log('Image loaded.');
        });
    };

    ImgManager.prototype.setPosition = function (img) {
        var screenAR = this.w / this.h,
            imgAR = $(img).width() / $(img).height();

        if (imgAR > screenAR) {
            console.log('Horizontal bars');

            $(img).width(this.w);
            $(img).height(this.w$ / imgAR);

            $(img).css({
                'top': (this.h - $(img).height()) / 2 + 'px'});
        } else {
            console.log('Vertical bars');

            $(img).height(this.h);
            $(img).width(this.h * imgAR);

            $(img).css({
                'left': (this.w - $(img).width()) / 2 + 'px'});
        }
    };

    ImgManager.prototype.onResize = function () {
        this.w = $(window).width();
        this.h = $(window).height();
    };

})();
