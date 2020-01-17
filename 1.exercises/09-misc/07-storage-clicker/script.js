/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    if (!localStorage.getItem('compteur')) {
        localStorage.setItem('compteur', 0);
    }
    document.getElementById("target").innerHTML = localStorage.getItem('compteur');
    document.getElementById("increment").addEventListener("click", () => {
        let nombre = localStorage.getItem('compteur');
        nombre++;
        document.getElementById("target").innerHTML = nombre;
        localStorage.setItem('compteur', nombre);
    });
})();