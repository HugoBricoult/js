(() => {
    document.addEventListener("mousemove", (event) => {
        document.getElementById("axe-x").innerHTML = "x : " + event.clientX;
        document.getElementById("axe-y").innerHTML = "y : " + event.clientY;
    });
})();