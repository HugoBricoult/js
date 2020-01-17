/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    document.getElementById("next").addEventListener("click", () => {
        let image = document.getElementsByTagName("img");
        let currPath = image[0].getAttribute("src");
        let ind = gallery.indexOf(currPath);
        if (ind == 4) {
            ind = 0;
        } else {
            ind++;
        }
        image[0].setAttribute("src", gallery[ind]);
    });
})();