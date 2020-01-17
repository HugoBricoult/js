/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let input = document.getElementById("pass-one");
    input.addEventListener("input", () => {
        let letters = document.getElementById("pass-one").value.split('');
        let number = 0;
        for (let i = 0; i < letters.length; i++) {
            if (!isNaN(letters[i])) {
                number++;
            }
        }
        if (number >= 2 & letters.length >= 8) {
            document.getElementById("validity").innerHTML = "ok";
        } else {
            document.getElementById("validity").innerHTML = "Pas ok";
        }

    });
})();