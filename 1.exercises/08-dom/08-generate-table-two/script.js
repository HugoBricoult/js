/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById("target");
    let tbl = document.createElement("table");
    for (let i = 0; i < 10; i++) {
        let tblRow = document.createElement("tr");
        let tblCol = document.createElement("td");
        for (let j = 0; j < 10; j++) {

            tblCol.innerHTML += j + 1;
            tblCol.innerHTML += " * ";
            tblCol.innerHTML += i + 1;
            tblCol.innerHTML += " = ";
            tblCol.innerHTML += (i + 1) * (j + 1);
            tblCol.innerHTML += "<br>";
        }
        tblRow.appendChild(tblCol);
        tbl.appendChild(tblRow);
    }
    target.appendChild(tbl);
})();