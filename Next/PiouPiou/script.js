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

class ball {
    constructor(x, y, gone) {
        this.x = x;
        this.y = y;
        this.gone = gone;
    }
}
(() => {

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
}

function start() {
    document.getElementById("btn").blur();
    clearInterval(game);
    init();
    game = setInterval(() => {
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
            }, 200);
            setTimeout(() => {
                step = 3;
            }, 400);
            setTimeout(() => {

                step = 0;
                randomCible();


            }, 600);
            if (counter == 10) {
                clearInterval(game);
                win();
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
    ctx.font = '48px serif';
    ctx.fillText('Vous avez Gagné !', 10, 150);
    ctx.stroke();
    ctx.closePath();
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