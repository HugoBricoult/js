let objets = [{
    "title": "épée",
    "physic": 7,
    "magic": 2,
    "minLevel": 4,
    "available": true
}, {
    "title": "Hache",
    "physic": 9,
    "magic": 0,
    "minLevel": 8,
    "available": false
}, {
    "title": "sceptre",
    "physic": 1,
    "magic": 9,
    "minLevel": 12,
    "available": true
}];
(() => {
    showObject();
    showAvailable();
    showLevel();
})();

function showObject() {
    objets.forEach(element => {
        console.log(element);
    });
}

function showLevel() {
    objets.forEach(element => {
        if (element.minLevel >= 10) {
            console.log(element);
        }
    });
}

function showAvailable() {
    objets.forEach(element => {
        if (element.available) {
            console.log(element);
        }
    });
}