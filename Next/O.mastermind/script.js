let history;
let ctxHistory;
let answer;
let ctxAnswer;
let currentAnswerIndex = 0;
let tryNumber = 8;
let colors = ["green", "blue", "yellow", "red", "brown", "orange"];
let colorsMix;
const HISTORY_CASE_WIDTH = 50;
const HISTORY_WIDTH = 200;
const HISTORY_HEIGHT = 450;
const ANSWER_HEIGHT = 50;
let historyPoint = [
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"]
];
let historyHint = [
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray"]
];
let currentAnswer = ["gray", "gray", "gray", "gray"];
let drawHistory = () => {
    ctxHistory.lineWidth = 7;
    //reset canvas
    ctxHistory.beginPath();
    ctxHistory.fillStyle = "lightgrey";
    ctxHistory.fillRect(0, 0, HISTORY_WIDTH + HISTORY_CASE_WIDTH, HISTORY_HEIGHT);
    ctxHistory.closePath();
    //Draw fistory point
    for (let i = 0; i < (HISTORY_WIDTH / HISTORY_CASE_WIDTH); i++) {
        for (let j = 0; j < (HISTORY_HEIGHT / HISTORY_CASE_WIDTH); j++) {
            ctxHistory.beginPath();
            ctxHistory.arc(((i + 1) * HISTORY_CASE_WIDTH) - (HISTORY_CASE_WIDTH / 2), ((j + 1) * HISTORY_CASE_WIDTH) - (HISTORY_CASE_WIDTH / 2), 15, 0, 2 * Math.PI);
            ctxHistory.strokeStyle = historyPoint[j][i];
            ctxHistory.stroke();
            ctxHistory.closePath();
        }
    }
    //draw history hint
    for (let i = 0; i < (HISTORY_HEIGHT / HISTORY_CASE_WIDTH); i++) {
        ctxHistory.beginPath();
        ctxHistory.arc(HISTORY_WIDTH + 15, ((i) * HISTORY_CASE_WIDTH) + 15, 5, 0, 2 * Math.PI);
        ctxHistory.strokeStyle = historyHint[i][0];
        ctxHistory.stroke();
        ctxHistory.closePath();
        ctxHistory.beginPath();
        ctxHistory.arc(HISTORY_WIDTH + 35, ((i) * HISTORY_CASE_WIDTH) + 15, 5, 0, 2 * Math.PI);
        ctxHistory.strokeStyle = historyHint[i][1];
        ctxHistory.stroke();
        ctxHistory.closePath();
        ctxHistory.beginPath();
        ctxHistory.arc(HISTORY_WIDTH + 15, ((i + 1) * HISTORY_CASE_WIDTH) - 15, 5, 0, 2 * Math.PI);
        ctxHistory.strokeStyle = historyHint[i][2];
        ctxHistory.stroke();
        ctxHistory.closePath();
        ctxHistory.beginPath();
        ctxHistory.arc(HISTORY_WIDTH + 35, ((i + 1) * HISTORY_CASE_WIDTH) - 15, 5, 0, 2 * Math.PI);
        ctxHistory.strokeStyle = historyHint[i][3];
        ctxHistory.stroke();
        ctxHistory.closePath();
    }
};
let drawAnswer = () => {
    ctxAnswer.lineWidth = 7;
    //reset canvas
    ctxAnswer.beginPath();
    ctxAnswer.fillStyle = "lightgrey";
    ctxAnswer.fillRect(0, 0, HISTORY_WIDTH, ANSWER_HEIGHT);
    ctxAnswer.closePath();
    //Draw answer
    for (let i = 0; i < currentAnswer.length; i++) {
        ctxAnswer.beginPath();
        ctxAnswer.arc(((i + 1) * HISTORY_CASE_WIDTH) - (HISTORY_CASE_WIDTH / 2), HISTORY_CASE_WIDTH - (HISTORY_CASE_WIDTH / 2), 15, 0, 2 * Math.PI);
        ctxAnswer.strokeStyle = currentAnswer[i];
        ctxAnswer.stroke();
        ctxAnswer.closePath();
    }
};
let update = (color) => {
    console.log(colorsMix);
    currentAnswer[currentAnswerIndex] = color;
    currentAnswerIndex++;
    drawAnswer();
    if (currentAnswerIndex == 4) {
        let goodPlace = 0;
        let goodchoice = 0;
        for (let i = 0; i < currentAnswer.length; i++) {
            if (currentAnswer[i] == colorsMix[i]) {
                goodPlace++;
            }
            for (let j = 0; j < colorsMix.length; j++) {
                if (currentAnswer[i] == colorsMix[j]) {
                    goodchoice++;
                }
            }
        }
        goodchoice = goodchoice - goodPlace;
        if (goodPlace == 4) {
            alert("Vous avez trouvé la combinaison !");
        }
        for (let i = 0; i < historyHint.length; i++) {
            if (goodPlace != 0) {
                historyHint[tryNumber][i] = "white";
                goodPlace--;
            } else if (goodchoice != 0) {
                historyHint[tryNumber][i] = "black";
                goodchoice--;
            }
        }
        historyPoint[tryNumber] = currentAnswer;
        tryNumber--;
        currentAnswerIndex = 0;
        currentAnswer = ["gray", "gray", "gray", "gray"];
        drawHistory();
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
(() => {
    colorsMix = shuffle(colors).splice(0, 4);
    answer = document.getElementById("answer");
    ctxAnswer = answer.getContext('2d');
    history = document.getElementById("history");
    ctxHistory = history.getContext('2d');
    drawHistory();
    drawAnswer();
})();