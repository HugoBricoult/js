/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function() {
        let dayList = document.getElementById("dob-day");
        let day = dayList.options[dayList.selectedIndex].value;
        let monthList = document.getElementById("dob-month");
        let month = monthList.options[monthList.selectedIndex].value;
        let yearList = document.getElementById("dob-year");
        let year = yearList.options[yearList.selectedIndex].value;
        let date1 = new Date(month + '/' + day + '/' + year);
        let ageDifMs = Date.now() - date1.getTime();
        let ageDate = new Date(ageDifMs);
        let age = Math.abs(ageDate.getUTCFullYear() - 1970);
        console.log(age);
    });
})();