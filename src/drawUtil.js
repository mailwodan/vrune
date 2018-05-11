var canvas = document.getElementById('cnvs');
var ctx = canvas.getContext('2d');

var drawRune = function (value) {

    var i;
    ctx.clearRect(0, 0, 400, 200);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4; // толщина линии

    for (i = 0; i < value.length; i++) {
        if (value[i] != "") {
            this.drawRuneLine(value[i]);
        }
    }
};

var drawRuneLine = function (value) {

    if (value == "g") {
        ctx.moveTo(0, 2); //передвигаем перо
        ctx.lineTo(300, 2); // Гебо
        ctx.stroke();
    } else if (value == "j") {
        ctx.moveTo(0, 100); //передвигаем перо
        ctx.lineTo(300, 100); // Джера
        ctx.stroke();
    } else if (value == "h") {
        ctx.moveTo(0, 198); //передвигаем перо
        ctx.lineTo(300, 198); // Хагаль
        ctx.stroke();
    } else if (value == "n") {
        ctx.moveTo(0, 0); //передвигаем перо
        ctx.lineTo(100, 200); // Наутиз
        ctx.stroke();
    } else if (value == "y") {
        ctx.moveTo(0, 0); //передвигаем перо
        ctx.moveTo(100, 200); // передвигаем перо
        ctx.lineTo(200, 0); // Эйваз
        ctx.stroke();
    } else if (value == "i") {
        ctx.moveTo(200, 0); //передвигаем перо
        ctx.lineTo(300, 200); // Иса
        ctx.stroke();
    } else if (value == "d") {
        ctx.moveTo(0, 200); //передвигаем перо
        ctx.lineTo(100, 0); // Дагаз 
        ctx.stroke();
    } else if (value == "s") {
        ctx.moveTo(100, 0); //передвигаем перо
        ctx.lineTo(200, 200); // Сол
        ctx.stroke();
    } else if (value == "q") {
        ctx.moveTo(200, 200); //передвигаем перо
        ctx.lineTo(300, 0); // Ингуз
        ctx.stroke();
    }

}; 

var drawGrid = function () {
    ctx.clearRect(0, 0, 400, 200);
    ctx.beginPath();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 4; // толщина линии

    ctx.moveTo(0, 2); //передвигаем перо
    ctx.lineTo(300, 2); // Гебо
    ctx.stroke();

    ctx.moveTo(0, 100); //передвигаем перо
    ctx.lineTo(300, 100); // Джера
    ctx.stroke();

    ctx.moveTo(0, 198); //передвигаем перо
    ctx.lineTo(300, 198); // Хагаль
    ctx.stroke();

    ctx.moveTo(0, 0); //передвигаем перо
    ctx.lineTo(100, 200); // Наутиз
    ctx.lineTo(200, 0); // Эйваз
    ctx.lineTo(300, 200); // Иса
    ctx.stroke();

    ctx.moveTo(0, 200); //передвигаем перо
    ctx.lineTo(100, 0); // Дагаз 
    ctx.lineTo(200, 200); // Сол
    ctx.lineTo(300, 0); // Ингуз
    ctx.stroke();

};