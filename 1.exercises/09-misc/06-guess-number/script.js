/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let random = Math.floor(Math.random() * 100);
    let tour = true;
    let choix = 0;
    let counter = 0;
    choix = prompt("Choisisez un chiffre entre 0 et 100");
    while (tour) {
        counter++;
        let numberchoice = parseInt(choix);
        if (choix > random) {
            choix = prompt("Plus petit !");
        } else if (choix < random) {
            choix = prompt("Plus grand !");
        } else {
            alert("Vous avez trouver le chiffre mystère : " + random + " en " + counter + " coups");
            tour = false;
        }

    }
})();