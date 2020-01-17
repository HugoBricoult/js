/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
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
        tblCol.innerHTML = "text";
        tblRow.appendChild(tblCol);
        tbl.appendChild(tblRow);
    }
    target.appendChild(tbl);
})();