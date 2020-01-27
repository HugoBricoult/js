(() => {
    let docs = document.getElementsByClassName("hoverMe");
    for (let i = 0; i < docs.length; i++) {
        docs[i].addEventListener("mouseover", () => {
            docs[i].style.opacity = 0;
        });
    };
    document.getElementById("reset").addEventListener("click", () => {
        for (let i = 0; i < docs.length; i++) {
            docs[i].style.opacity = 1;
        };
    });
})();