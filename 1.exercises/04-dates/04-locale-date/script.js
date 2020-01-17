/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let days = ["samedi", "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi"];
    let mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
    let date = new Date();
    let doc = document.getElementById("target");
    doc.innerHTML = days[date.getDay()] + " " + date.getDate() + " " + mois[date.getMonth()] + " " + date.getUTCFullYear() + ", " + date.getHours() + "h" + date.getMinutes();

})();