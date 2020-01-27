(() => {
    document.addEventListener("keydown", (event) => {
        let doc = document.getElementById("character").style;
        console.log(typeof(event.key));
        let arr = ["white", "brown", "orange", "purple", "pink", "yellow", "gray", "green", "blue", "red"];
        let counter = 0;
        switch (event.key) {
            case "1":
                doc.backgroundColor = "red";
                break;
            case "2":
                doc.backgroundColor = "blue";
                break;
            case "3":
                doc.backgroundColor = "green";
                break;
            case "4":
                doc.backgroundColor = "gray";
                break;
            case "5":
                doc.backgroundColor = "yellow";
                break;
            case "6":
                doc.backgroundColor = "pink";
                break;
            case "7":
                doc.backgroundColor = "purple";
                break;
            case "8":
                doc.backgroundColor = "orange";
                break;
            case "9":
                doc.backgroundColor = "brown";
                break;
            case "e":
                setInterval(() => {
                    doc.backgroundColor = arr[counter];
                    counter++;
                    if (counter > 9) {
                        counter = 0;
                    }
                }, 30);
                break;
            default:
                doc.backgroundColor = "white";
                break;
        }
    });
})();