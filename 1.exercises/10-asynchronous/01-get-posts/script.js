/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //fonction afficher dans la console
    function teste(error, article) {
        console.log(error);
        console.log(article);
    }
    document.getElementById("run").addEventListener("click", () => {
        //fonction get post renvoie des donnée en callback depuis callback.js et utils.js
        window.lib.getPosts(teste);
    });
})();