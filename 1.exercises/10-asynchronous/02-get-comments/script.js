/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//article = [{"id":0,
//            "title":"titre",
//            "content":"contenu",
//            "author":"auteur"}];


(() => {
    let articles = [];

    function addCom(error, comment) {
        articles.forEach(element => {
            element["comments"] = comment;
        });
        console.log(articles);
    }

    function getCom(error, article) {
        articles = article;
        article.forEach(element => {
            window.lib.getComments(element.id, addCom);
        });
    }
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(getCom);
    });
})();