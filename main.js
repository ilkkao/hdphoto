
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
    this.tilesX = n / 5;

    n = 0;

    for (var i = 0; i < this.w; i += spacing) {
        this.drawLine(i, 0, i, this.h, n % 5 ? 0.3 : 1);
        n++;
    }
    this.tilesY = n / 5;
    console.log("Tiles: " + this.tilesX + " x " + this.tilesY);
};

ImagePuzzle.prototype.drawPiece = function () {
    var delay = 0;

    for (var y = 0; y < this.h; y += 100) {
        for (var x = 0; x < this.w; x += 100) {
            var image = new Image();
            image.style.clip = "rect(" + y + "px " + (x + 100) + "px " +
                (y + 100) + "px " + x + "px)";
            image.style.position = "absolute";
            image.style.top = "0px"; //y + "px";
            image.style.left = "0px"; //x + "px";

            delay += 100;

            image.onload = function(i, d) {
                return function() {
                    setTimeout(function() {
                        document.body.appendChild(i);
                    }, d);
                };
            }(image, delay);

            image.src = 'images/bg1.jpg';
        }
    }
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
