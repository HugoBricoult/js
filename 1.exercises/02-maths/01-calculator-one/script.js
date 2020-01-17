/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var nombre1 = 0;
    var nombre2 = 0;

    document.getElementById("addition").addEventListener("click", () => {
        nombre1 = parseInt(document.getElementById("op-one").value);
        nombre2 = parseInt(document.getElementById("op-two").value);
        let reponse = nombre1 + nombre2;
        console.log(reponse);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        nombre1 = parseInt(document.getElementById("op-one").value);
        nombre2 = parseInt(document.getElementById("op-two").value);
        let reponse = nombre1 - nombre2;
        console.log(reponse);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        nombre1 = parseInt(document.getElementById("op-one").value);
        nombre2 = parseInt(document.getElementById("op-two").value);
        let reponse = nombre1 * nombre2;
        console.log(reponse);
    });

    document.getElementById("division").addEventListener("click", () => {
        nombre1 = parseInt(document.getElementById("op-one").value);
        nombre2 = parseInt(document.getElementById("op-two").value);
        let reponse = nombre1 / nombre2;
        console.log(reponse);
    });
})();