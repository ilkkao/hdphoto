(function () {

    ImgSplitter = function(url) {
        this.imgUrl = url;
        this.w = $(window).width();
        this.h = $(window).height();

        this.ctx = $('#grid')[0].getContext('2d');
    };

    ImgSplitter.prototype.drawLine = function (x, y, n, m, w) {
        this.ctx.lineWidth = w;
        this.ctx.strokeStyle = '#dddddd';

        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(n, m);
        this.ctx.stroke();
    };

    ImgSplitter.prototype.drawGrid = function () {

        //Configure canvas
        $('#grid').width(this.w).height(this.h);
        $('#grid').attr('width', this.w).attr('height', this.h);

        var spacing = 20; // + ((this.w % 100 ) / Math.floor(this.w / 20));
        console.log('Spacing is: ', spacing);

        for (var i = 0; i < this.h; i += spacing) {
            this.drawLine(0, i, this.w, i, i % 100 ? 0.3 : 1);
        }

        for (i = 0; i < this.w; i += spacing) {
            this.drawLine(i, 0, i, this.h, i % 100 ? 0.3 : 1);
        }
    };

    ImgSplitter.prototype.split = function (callback) {
        for (var y = 0; y < this.h; y += 100) {
            for (var x = 0; x < this.w; x += 100) {
                var image = new Image();
                image.style.clip = 'rect(' + y + 'px ' + (x + 100) + 'px ' +
                    (y + 100) + 'px ' + x + 'px)';
                image.style.position = 'absolute';
                image.style.top = '0px';
                image.style.left = '0px';
                image.style.display = 'none';

                image.style.minHeight = '100%';
                image.style.minWidth = '100%';

                image.onload = callback(image, x, y);
                image.src = this.imgUrl;
            }
        }
    };

    ImgSplitter.prototype.onResize = function () {
        this.w = $(window).width();
        this.h = $(window).height();
    };

})();
