/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const chiffres = [5, 48, 6, 35, 7, 94, 8, 15, 2, 42];
    document.getElementById("run").addEventListener("click", function() {
        let nombre = 1;
        let sum = 0;
        chiffres.forEach(element => {
            document.getElementById("n-" + nombre).innerHTML = element;
            nombre++;
            sum += element;
        });
        let nombres = chiffres.sort(function(a, b) { return a - b });
        document.getElementById("min").innerHTML = nombres[0];
        document.getElementById("max").innerHTML = nombres[nombres.length - 1];
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum / 10;
    });
})();