var canvas = document.getElementById('spirograph');
var ctx = canvas.getContext('2d');

// ctx.stroke() отрисовка прямоугольника

// входные параметры
var R=130;
var r=17;
var d=50;
var teta = 0;
var color = 'green';

function spiro() {
    var x = (R-r)*Math.cos(teta)+d*Math.cos((R-r)*teta/r);
    var y = (R-r)*Math.cos(teta)-d*Math.sin((R-r)*teta/r);
    teta = teta+0.02;
    ctx.fillStyle = color;
    ctx.fillRect(x+300,y+300,2,2);
    setTimeout(spiro, 10);
}
spiro();


