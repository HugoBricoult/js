/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("part-one").addEventListener("click", () => {
        let min = document.getElementById("part-one").getAttribute("data-min");
        let max = document.getElementById("part-one").getAttribute("data-max");
        let curr = parseInt(document.getElementById("part-one").innerHTML);
        if (curr == max) {
            curr = min;
        } else {
            curr++;
        }
        document.getElementById("part-one").innerHTML = curr;
        changeNumber();

    });
    document.getElementById("part-two").addEventListener("click", () => {
        let min = document.getElementById("part-two").getAttribute("data-min");
        let max = document.getElementById("part-two").getAttribute("data-max");
        let curr = parseInt(document.getElementById("part-two").innerHTML);
        if (curr == max) {
            curr = min;
        } else {
            curr++;
        }
        document.getElementById("part-two").innerHTML = curr;
        changeNumber();
    });
    document.getElementById("part-three").addEventListener("click", () => {
        let min = document.getElementById("part-three").getAttribute("data-min");
        let max = document.getElementById("part-three").getAttribute("data-max");
        let curr = parseInt(document.getElementById("part-three").innerHTML);
        if (curr == max) {
            curr = min;
        } else {
            curr++;
        }
        document.getElementById("part-three").innerHTML = curr;
        changeNumber();
    });
    document.getElementById("part-four").addEventListener("click", () => {
        let min = document.getElementById("part-four").getAttribute("data-min");
        let max = document.getElementById("part-four").getAttribute("data-max");
        let curr = parseInt(document.getElementById("part-four").innerHTML);
        if (curr == max) {
            curr = min;
        } else {
            curr++;
        }
        document.getElementById("part-four").innerHTML = curr;
        changeNumber();
    });
})();

function changeNumber() {
    let one = document.getElementById("part-one").innerHTML;
    let two = document.getElementById("part-two").innerHTML;
    if (two.length == 1) {
        two = "0" + two;
    }
    let three = document.getElementById("part-three").innerHTML;
    if (three.length == 1) {
        three = "0" + three;
    }
    let four = document.getElementById("part-four").innerHTML;
    if (four.length == 1) {
        four = "0" + four;
    }
    document.getElementById("target").innerHTML = "+" + one + two + three + four;
}