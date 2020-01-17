/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let source = document.getElementById("source");
    let path = source.getAttribute("data-image");
    let child = document.createElement('img');
    child.setAttribute("src", path);
    let fig = document.getElementById("target").appendChild(child);
    source.remove();
})();