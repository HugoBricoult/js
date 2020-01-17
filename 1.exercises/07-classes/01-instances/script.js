/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let cat1 = new Cat("Skitty", 9);
    let cat2 = new Cat("Pixel", 6);
    document.getElementById("run").addEventListener("click", () => {
        console.log(cat1);
        console.log(cat2);
    });
})();