/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let boucle = true;
    while (boucle) {
        let age = prompt("Indiquez votre age");
        let sexe = prompt("Indiquez votre sexe");
        let ville = prompt("Indiquez votre ville");
        let r = confirm("Valider les réponses ?")
        if (r == true) {
            alert(age + " | " + sexe + " | " + ville);
            boucle = false;
        }
    }
})();