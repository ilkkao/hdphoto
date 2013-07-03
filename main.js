
var ImagePuzzle = function() {
    this.ctx = $('#grid')[0].getContext("2d");
};

ImagePuzzle.prototype.drawLine = function (x, y, n, m, w) {
    this.ctx.lineWidth = w;
    this.ctx.strokeStyle = '#dddddd';

    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(n, m);
    this.ctx.stroke();
};

ImagePuzzle.prototype.drawGrid = function () {

    //Configure canvas
    $('#grid').width(this.w).height(this.h);
    $('#grid').attr('width', this.w).attr('height', this.h);

    var spacing = 20 + ((this.w % 100 ) / Math.floor(this.w / 20));
    console.log("Spacing is: ", spacing);

    var width;
    var n = 0;

    for (var i = 0; i < this.h; i += spacing) {
        this.drawLine(0, i, this.w, i, n % 5 ? 0.3 : 1);
        n++;
    }

    n = 0;

    for (var i = 0; i < this.w; i += spacing) {
        this.drawLine(i, 0, i, this.h, n % 5 ? 0.3 : 1);
        n++;
    }
};

ImagePuzzle.prototype.drawPiece = function () {
    var imageObj = new Image();
    var that = this;

    imageObj.onload = function() {
        that.ctx.drawImage(imageObj, 0, 0, that.w, that.h);
    };

    imageObj.src = 'images/bg1.jpg';
};

ImagePuzzle.prototype.onResize = function () {
    this.w = $(window).width();
    this.h = $(window).height();

    engine.drawGrid();
}

var engine = new ImagePuzzle();

$(document).ready(function () {
    engine.onResize();
    engine.drawPiece();
});

$(window).resize(function() {
    engine.onResize();
    engine.drawPiece();
});
