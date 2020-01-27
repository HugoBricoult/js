let canvas = document.getElementById("c");
let ctx = null;
let playX = 0;
let playY = 0;
let ballX = 0;
let ballY = 0;
let cibleX = 0;
let cibleY = 0;
let counter = 0;
let time = 10;
let endGame = false;
let balls = [];
var game;
let goLeft = false;
let goRight = false;
let step = 0;
var timer;
let temps;
class ball {
    constructor(x, y, gone) {
        this.x = x;
        this.y = y;
        this.gone = gone;
    }
}
(() => {
    if (!localStorage.getItem('temps')) {
        localStorage.setItem('temps', "[]");
    }
    document.getElementById("btn").addEventListener("click", () => {
        start();
    });
    document.addEventListener('keydown', (event) => {
        let touche = event.code;
        if (touche == "Space") {
            shoot();
        }
        if (touche == "ArrowRight") {
            goRight = true;
        }
        if (touche == "ArrowLeft") {
            goLeft = true;
        }
    });
    document.addEventListener('keyup', (event) => {
        let touche = event.code;
        if (touche == "ArrowRight") {
            goRight = false;
        }
        if (touche == "ArrowLeft") {
            goLeft = false;
        }
    });


})();

function init() {
    playX = 10;
    playY = 270;
    ballX = 10;
    ballY = 200;
    cibleX = 10;
    cibleY = 10;
    counter = 0;
    shoots = false;
    balls = [];
    ctx = canvas.getContext("2d");
    randomCible();
    document.getElementById("record").innerHTML = "";
    let reco = JSON.parse(localStorage.getItem("temps"));
    let tmp = [];
    reco.forEach(element => {
        console.log(element);
        tmp.push(element.temps);
    });
    tmp.sort(function(a, b) { return a - b; });
    for (let i = 0; i < 5; i++) {
        document.getElementById("record").innerHTML += "Temps : " + tmp[i] + "s<br>";
    }
}

function setTimer() {
    temps = Math.ceil((Date.now() - timer) / 100) / 10;
    document.getElementById("timer").innerHTML = "Temps : " + temps + "s";
}

function start() {
    timer = Date.now();
    document.getElementById("btn").blur();
    clearInterval(game);
    init();
    game = setInterval(() => {
        setTimer();
        draw();
        update();
    }, time);
}

function pause() {
    clearInterval(game);
}



function play() {
    game = setInterval(() => {
        draw();
        update();
    }, time);
}

function update() {
    if (goLeft) {
        if (playX > 10) {
            playX -= 5;
        }
    }
    if (goRight) {
        if (playX < 350) {
            playX += 5;
        }
    }
    for (let i = 0; i < balls.length; i++) {
        balls[i].y -= 5;
        if (balls[i].y <= cibleY + 15 & balls[i].x >= cibleX - 10 & balls[i].x <= cibleX + 40 & step == 0) {
            balls.splice(i, 1);
            counter++;


            document.getElementById("score").innerHTML = "Score : " + counter;

            step = 1;

            setTimeout(() => {
                step = 2;
            }, 100);
            setTimeout(() => {
                step = 3;
            }, 200);
            setTimeout(() => {

                step = 0;
                randomCible();


            }, 300);
            if (counter == 10) {
                clearInterval(game);
                win();
                record();
            }

        } else if (balls[i].y <= -10) {
            balls.splice(i, 1);
        }
    };
}

function win() {
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = "#ffffff";
    ctx.font = '35px serif';
    ctx.fillText('Vous avez Gagné en ' + temps + "s", 10, 150);
    ctx.stroke();
    ctx.closePath();
}

function record() {
    let arr = { "temps": temps };
    document.getElementById("record").innerHTML = "";
    let reco = JSON.parse(localStorage.getItem("temps"));
    reco.push(arr);
    localStorage.setItem("temps", JSON.stringify(reco));
    let tmp = [];
    reco.forEach(element => {
        console.log(element);
        tmp.push(element.temps);
    });
    tmp.sort(function(a, b) { return a - b; });
    for (let i = 0; i < tmp.length; i++) {
        document.getElementById("record").innerHTML += "Temps : " + tmp[i] + "s<br>";
    }

}

function randomCible() {
    cibleX = Math.floor(Math.random() * 350) - 10;
    cibleX = cibleX - (cibleX % 5);
    if (cibleX <= 10) {
        cibleX = 10;
    }
    if (cibleX >= 350) {
        cibleX = 350;
    }
}

function draw() {
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.fillRect(0, 0, 400, 300);
    if (step == 0) {
        ctx.rect(cibleX, cibleY, 40, 20);
    } else if (step == 1) {
        ctx.rect(cibleX, cibleY, 15, 20);
        ctx.rect(cibleX + 25, cibleY, 15, 20);
    } else if (step == 2) {
        ctx.rect(cibleX, cibleY, 10, 20);
        ctx.rect(cibleX + 30, cibleY, 10, 20);
    } else if (step == 3) {
        ctx.rect(cibleX, cibleY, 5, 20);
        ctx.rect(cibleX + 35, cibleY, 5, 20);
    }
    ctx.rect(playX, playY, 40, 20);

    balls.forEach(element => {
        if (element.gone) {
            ctx.rect(element.x, element.y, 10, 10);
        }
    });


    ctx.stroke();
    ctx.closePath();
}

function shoot() {
    shoots = true;
    balls.push(new ball(playX + 15, playY - 10, true));
}