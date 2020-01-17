/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function() {
        let mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
        let year = document.getElementById("year").value;
        let date = new Date();
        for (let i = 1; i < 13; i++) {
            date = new Date(i + '/13/' + year);
            if (date.getDay() == 5) {
                console.log(mois[i - 1]);
            }
        }
    });

})();