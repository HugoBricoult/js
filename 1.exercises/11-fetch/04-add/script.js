/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    alert("séparer les pouvoirs par une virgule");
    document.getElementById("run").addEventListener("click", () => {
        let name = document.getElementById("hero-name").value;
        let alterEgo = document.getElementById("hero-alter-ego").value;
        let power = document.getElementById("hero-powers").value;
        //vérification Champs vides
        if (name == "" || alterEgo == "" || power == "") {
            alert("Touts les champs doivent être rempli !");
        } else {

            //transformer les pouvoirs en un tableau
            let powers = power.split(",");
            //contruction de l'objet hero
            let hero = {
                name: name,
                alterEgo: alterEgo,
                abilities: powers
            };
            let req = fetch("http://localhost:3000/heroes", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(hero)
            }).then((res) => console.log(res)).catch((res) => console.log(res));
        }
    });
})();