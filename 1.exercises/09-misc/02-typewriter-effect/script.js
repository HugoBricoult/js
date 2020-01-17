/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let text = document.getElementById("target").innerHTML.split("");
    document.getElementById("target").innerHTML = "";
    let time = 0;
    let random = 0;
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            document.getElementById("target").innerHTML += text[i];
        }, time);
        random = Math.floor(Math.random() * 200);
        time += random;
    }
})();