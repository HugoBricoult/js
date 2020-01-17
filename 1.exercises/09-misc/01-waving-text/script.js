/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let text = document.getElementById("target").innerHTML.split("");
    let number = 10;
    let target = document.getElementById("target");
    target.style.height = "200px";
    let grow = true;
    target.innerHTML = "";
    //generate base
    for (let i = 0; i < text.length; i++) {
        text[i] = "<span style=\"transition-duration:0.3s;font-size: " + number + "px;\">" + text[i] + "<span>";
        if (number >= 30) {
            grow = false;
        }
        if (number <= 10) {
            grow = true;
        }
        if (grow) {
            number += 5;
        } else {
            number -= 5;
        }
        target.innerHTML += text[i];
    }
    let texts = document.getElementsByTagName("span");
    let numberbase = 10;
    let growbase = true;
    setInterval(() => {
        number = numberbase;
        for (let j = 1; j < texts.length; j++) {
            texts[j].style.fontSize = number + "px";
            if (number >= 30) {
                grow = false;
            }
            if (number <= 10) {
                grow = true;
            }
            if (grow) {
                number += 5;
            } else {
                number -= 5;
            }
        }
        if (numberbase >= 30) {
            growbase = false;
        }
        if (numberbase <= 10) {
            growbase = true;
        }
        if (growbase) {
            numberbase += 5;
        } else {
            numberbase -= 5;
        }
        console.log(numberbase);
    }, 300);




})();