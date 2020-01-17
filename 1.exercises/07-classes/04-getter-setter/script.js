/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return this.firstname + " " + this.lastname;
        }
        set name(x) {
            let nameFL = x.split(" ");
            this.firstname = nameFL[0];
            this.lastname = nameFL[1];
        }

    }
    document.getElementById("run").addEventListener("click", () => {
        let person = new Person("hugo", "Bricoult");
        console.log(person.name);
        person.name = "soufiane amjahad";
        console.log(person.name);
    });
})();