function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
(() => {
    //melanger les cartes
    let image = ["anehihan.jpg", "chatminou.jpg", "chientoutou.jpg", "lamacrachat.jpg", "lapinscrottes.jpg", "lionnegraou.jpg"];
    let images = image.concat(image);
    shuffle(images);
    //recupèrer l'esapce de jeu
    let table = document.getElementById("cont");
    //créer les 12 divs
    for (let i = 0; i < images.length; i++) {
        //div de la carte
        let fc = document.createElement("div");
        fc.setAttribute("class", "flip-card");
        fc.setAttribute("num", i);
        fc.setAttribute("img", images[i]);
        let fci = document.createElement("div");
        fci.setAttribute("class", "flip-card-inner");
        let fcf = document.createElement("div");
        fcf.setAttribute("class", "flip-card-front");
        let fcb = document.createElement("div");
        fcb.setAttribute("class", "flip-card-back");

        //ajout click listenner
        fc.addEventListener("click", (event) => {
            check(event.currentTarget);
        });

        //image
        let imageC = document.createElement("img");
        imageC.setAttribute("src", "img/" + images[i]);

        //text
        let text = document.createElement("p");
        text.innerHTML = "Jeux des paires"

        //ajout div dans div
        fcf.appendChild(text);
        fcb.appendChild(imageC);
        fci.appendChild(fcf);
        fci.appendChild(fcb);
        fc.appendChild(fci);
        table.appendChild(fc);
    }
})();
let previous = "";
let previousNumber = 0;
let valid = new Set();
let game = true;

function check(card) {
    if (game) {
        let o = card.getElementsByClassName("flip-card-inner");
        o[0].style.transform = "rotateY(180deg)";
        if (previous == "") {
            previous = card.getAttribute('img');
            previousNumber = parseInt(card.getAttribute('num'));
            console.log("premiere carte");
        } else {
            if (previous == card.getAttribute('img')) {
                previous = "";
                valid.add(previousNumber);
                valid.add(parseInt(card.getAttribute('num')));
                previousNumber = parseInt(card.getAttribute('num'));
                console.log("2 carte identique");
                if (valid.length == 12) {
                    alert("vous avez gagné");
                }
            } else {
                previous = "";
                console.log("2 carte diff" + previous);
                game = false;
                setTimeout(() => {
                    let cards = document.getElementsByClassName("flip-card");
                    for (let i = 0; i < cards.length; i++) {
                        if (!valid.has(parseInt(cards[i].getAttribute("num")))) {
                            let t = cards[i].getElementsByClassName("flip-card-inner");
                            t[0].style.transform = "rotateY(0deg)";
                        } else {
                            let tt = cards[i].getElementsByClassName("flip-card-inner");
                            tt[0].style.transform = "rotateY(180deg)";
                        }
                    }
                    game = true;
                }, 1500);
            }
        }
    }
}