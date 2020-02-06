(() => {
    document.addEventListener("keydown", (event) => {

        switch (event.code) {
            case "ArrowUp":
                document.getElementById("up").setAttribute("class", "highlight");
                break;
            case "ArrowDown":
                document.getElementById("down").setAttribute("class", "highlight");
                break;
            case "ArrowLeft":
                document.getElementById("left").setAttribute("class", "highlight");
                break;
            case "ArrowRight":
                document.getElementById("right").setAttribute("class", "highlight");
                break;
        }
    });
    let num = 115;
    let n = num % 4;
    console.log(n);
})();