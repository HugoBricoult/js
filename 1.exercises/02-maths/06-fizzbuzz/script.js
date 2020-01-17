/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    for (let i = 1; i <= 100; i++) {
        let mod3 = i % 3;
        let mod5 = i % 5;
        if (mod3 == 0 & mod5 == 0) {
            console.log("fizzbuzz");
        } else if (mod3 == 0) {
            console.log("fizz");
        } else if (mod5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }

})();