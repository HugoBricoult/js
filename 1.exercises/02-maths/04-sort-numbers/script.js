/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let numbers = document.getElementById("numbers").value.toString();
        let number = numbers.split(',');
        let numb = [];
        for (let i = 0; i < number.length; i++) {
            numb.push(parseInt(number[i]));
        }
        console.log(numb);
        numb.sort(function(a, b) { return a - b; });
        console.log(numb);
    });
})();