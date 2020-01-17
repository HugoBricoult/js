/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let mot1 = document.getElementById("pass-one").value;
        let mot2 = document.getElementById("pass-two").value;
        if (mot1 == mot2) {
            alert("les mot de passe correspondent");
        } else {
            let inputs = document.getElementsByName("pass-one");
            inputs[0].style.borderColor = "red";
            inputs = document.getElementsByName("pass-two");
            inputs[0].style.borderColor = "red";
        }
    });
})();