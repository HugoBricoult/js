(() => {
    let docs = document.getElementsByClassName("hoverMe");
    for (let i = 0; i < docs.length; i++) {
        docs[i].addEventListener("mouseover", () => {
            docs[i].style.opacity = 0;
        });
    };
})();