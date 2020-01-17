/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn1 = true;
    let btn2 = true;
    let btn3 = true;
    let btn4 = true;
    document.getElementById("fix-part-one").addEventListener("click", () => {
        btn1 = !btn1;
    });
    document.getElementById("fix-part-two").addEventListener("click", () => {
        btn2 = !btn2;
    });
    document.getElementById("fix-part-three").addEventListener("click", () => {
        btn3 = !btn3;
    });
    document.getElementById("fix-part-four").addEventListener("click", () => {
        btn4 = !btn4;
    });
    let valmin1 = document.getElementById("part-one").getAttribute("data-min");
    let valmax1 = document.getElementById("part-one").getAttribute("data-max");
    let valmin2 = document.getElementById("part-two").getAttribute("data-min");
    let valmax2 = document.getElementById("part-two").getAttribute("data-max");
    setInterval(() => {
        if (btn1) {
            let b1 = parseInt(document.getElementById("part-one").value);
            if (b1 == valmax1) {
                b1 = valmin1;
            } else {
                b1++;
            }
            document.getElementById("part-one").value = b1;
            document.getElementById("fix-part-one").innerHTML = "Stop";
        } else {
            document.getElementById("fix-part-one").innerHTML = "Play";
        }
        if (btn2) {
            let b2 = parseInt(document.getElementById("part-two").value);
            if (b2 == valmax2) {
                b2 = valmin2;
            } else {
                b2++;
            }
            document.getElementById("part-two").value = b2;
            document.getElementById("fix-part-two").innerHTML = "Stop";
        } else {
            document.getElementById("fix-part-two").innerHTML = "Play";
        }
        if (btn3) {
            let b3 = parseInt(document.getElementById("part-three").value);
            if (b3 == valmax2) {
                b3 = valmin2;
            } else {
                b3++;
            }
            document.getElementById("part-three").value = b3;
            document.getElementById("fix-part-three").innerHTML = "Stop";
        } else {
            document.getElementById("fix-part-three").innerHTML = "Play";
        }
        if (btn4) {
            let b4 = parseInt(document.getElementById("part-four").value);
            if (b4 == valmax2) {
                b4 = valmin2;
            } else {
                b4++;
            }
            document.getElementById("part-four").value = b4;
            document.getElementById("fix-part-four").innerHTML = "Stop";
        } else {
            document.getElementById("fix-part-four").innerHTML = "Play";
        }
        changeNumber();
    }, 100);
})();

function changeNumber() {
    let one = document.getElementById("part-one").value;
    let two = document.getElementById("part-two").value;
    if (two.length == 1) {
        two = "0" + two;
    }
    let three = document.getElementById("part-three").value;
    if (three.length == 1) {
        three = "0" + three;
    }
    let four = document.getElementById("part-four").value;
    if (four.length == 1) {
        four = "0" + four;
    }
    document.getElementById("target").innerHTML = "+" + one + two + three + four;
}