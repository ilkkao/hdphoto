(function () {
    var img;
    var callback;

    drawImage = function() {
        document.body.appendChild(img);
        engine.setPosition(img, true);
        $(img).show();
        callback();
    };

    FadeInEffect = function() {
        img = null;
    };

    FadeInEffect.prototype.load = function (url, cb) {
        callback = cb;
        img = new Image();
        img.style.position = 'absolute';
        img.style.display = 'none';
        img.style.top = '0px';
        img.style.left = '0px';

        img.onload = drawImage;
        img.src = url;
    };
})();
