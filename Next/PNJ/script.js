(() => {
    let character = {
        "name": "angerand",
        "age": 32,
        "items_to_give": ["massue", "hache", "épée"],
        "giveItem": () => {
            let rand = Math.floor(Math.random() * character.items_to_give.length);
            character.items_to_give.splice(rand, 1);
        }
    }
    for (const key in character) {
        console.log(character[key]);
    }
    character.giveItem();
    console.log(character);
})();