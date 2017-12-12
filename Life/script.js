var canvas = document.getElementById('life');
var ctx = canvas.getContext('2d');

var mas=[];
var count=0;
var timer;

canvas.onclick = function (event) {   // вешаем на canvas click
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x,y);
    x = Math.floor(x/10); // 300/10=30 кубиков
    y = Math.floor(y/10); // 300/10=30 кубиков
    mas[y][x]=1; // куда я кликнул ставим 1
    console.log(mas);
    drawField();
}

function goLife() {  // игровое поле двумерный массив с нулями
    var n=30, m=30;
    for(var i=0; i<m; i++) {
        mas[i]=[];
        for(var j=0; j<n; j++) {
            mas [i][j]=0;
        }
    }
}
goLife();

function drawField() {  //рисуем квадратик на поле по нажатию
    ctx.clearRect(0,0,300,300);
    for(var i=0; i<30; i++) {
        for(var j=0; j<30; j++) {
            if (mas [i][j]==1) {
                ctx.fillRect(j*10,i*10,10,10);
            }
        }
    }
}

function startLife() {
    // моделирование жизни
    var mas2=[];
    for(var i=0; i<30; i++) {
        mas2[i]=[];
        for(var j=0; j<30; j++) {  //считаем кол-во соседей
            var neighbors=0;
            //делаем бесконечное поле
            if(mas[fpm(i)-1][j]==1) neighbors++; // верх
            if(mas[i][fpp(j)+1]==1) neighbors++; // право
            if(mas[fpp(i)+1][j]==1) neighbors++; //сосед снизу
            if(mas[i][fpm(j)-1]==1) neighbors++; //сосед слева
            if(mas[fpm(i)-1][fpp(j)+1]==1) neighbors++;
            if(mas[fpp(i)+1][fpp(j)+1]==1) neighbors++;
            if(mas[fpp(i)+1][fpm(j)-1]==1) neighbors++;
            if(mas[fpm(i)-1][fpm(j)-1]==1) neighbors++;
            //проверяем соседей
            (neighbors==2 || neighbors==3) ? mas2[i][j]=1 : mas2[i][j]==0;
        }
    }
    mas = mas2;
    drawField();
    count++;
    document.getElementById('count').innerHTML = count;
    timer = setTimeout(startLife, 300);
}

function fpm(i) { //если выход за границы поля minus
    if(i==0) return 30;
    else return i;

}
function fpp(i) { //если выход за границы поля plus
    if(i==29) return -1;
    else return i;

}
document.getElementById('start').onclick = startLife;