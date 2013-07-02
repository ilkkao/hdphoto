
$(document).ready(function () {
    var w = document.body.clientWidth;
    var h = document.body.clientHeight;

    $('#grid').width(w).height(h);
    $('#grid').attr('width', w);
    $('#grid').attr('height', h);

    ctx = $('#grid')[0].getContext("2d");

    ctx.strokeStyle = '#dddddd';
    var spacing = 20;

    function drawLine(x, y, n, m, w) {
        ctx.lineWidth = w;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(n, m);
        ctx.stroke();
    }

    var width;

    for (var i = 0; i < h; i += spacing) {
        width = (i % (spacing * 5)) ? 0.3 : 1;
        drawLine(0, i, w, i, width);
    }

    for (var i = 0; i < w; i += spacing) {
        width = (i % (spacing * 5)) ? 0.3 : 1;
        drawLine(i, 0, i, h, width);
    }

    //Menu
    $('#tx').slider();
    $('#ty').slider();
    $('#tz').slider();

    $('#sx').slider();
    $('#sy').slider();
    $('#sz').slider();

    $('#rx').slider();
    $('#ry').slider();
    $('#rz').slider();

    var matrix = [
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ];

    var s = "matrix3d(";
    s += tM.e(1,1).toFixed(10) + "," + tM.e(1,2).toFixed(10) + "," +
        tM.e(1,3).toFixed(10) + "," + tM.e(1,4).toFixed(10) + ",";
    s += tM.e(2,1).toFixed(10) + "," + tM.e(2,2).toFixed(10) + "," +
        tM.e(2,3).toFixed(10) + "," + tM.e(2,4).toFixed(10) + ",";
    s += tM.e(3,1).toFixed(10) + "," + tM.e(3,2).toFixed(10) + "," +
        tM.e(3,3).toFixed(10) + "," + tM.e(3,4).toFixed(10) + ",";
    s += tM.e(4,1).toFixed(10) + "," + tM.e(4,2).toFixed(10) + "," +
        tM.e(4,3).toFixed(10) + "," + tM.e(4,4).toFixed(10);
    s += ")";

document.getElementById('darth-vader').style['-webkit-transform'] = s


});
