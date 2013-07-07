(function () {
    var img;

    drawImage = function() {
        document.body.appendChild(img);
        engine.setPosition(img, true);
        $(img).show();
    };

    FadeInEffect = function() {
        img = null;
    };

    FadeInEffect.prototype.load = function (url, callback) {
        img = new Image();
        img.style.position = 'absolute';
        img.style.display = 'none';
        img.style.top = '0px';
        img.style.left = '0px';

        img.onload = drawImage;
        img.src = url;
    };
})();
