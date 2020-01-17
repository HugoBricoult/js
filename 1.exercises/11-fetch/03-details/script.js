/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let target = document.getElementById("target");
        let template = document.getElementById("tpl-hero");
        let id = parseInt(document.getElementById("hero-id").value);
        let promise = fetch("http://localhost:3000/heroes").then(rs => rs.json());
        promise.then(val =>
            val.forEach(element => {
                if (element.id == id) {
                    let clone = document.importNode(template.content, true);
                    //Name
                    let name = clone.querySelectorAll("strong");
                    name[0].textContent = element.name;
                    //AlterEgo
                    let alter = clone.querySelectorAll("em");
                    alter[0].textContent = element.alterEgo;
                    //power
                    let power = clone.querySelectorAll("p");
                    power[0].textContent = element.abilities;
                    target.appendChild(clone);
                }
            }));

    });
})();