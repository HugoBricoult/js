let mainCharacter = {
    "name": "joseph",
    "level": 42,
    "life": 86,
    "weapon": { "name": "Axe", "damage": 23 },
    "attack": () => {
        console.log(mainCharacter.name + " attaque avec l'arme " + mainCharacter.weapon.name + " les dégâts sont " + (mainCharacter.level * mainCharacter.weapon.damage));
    }
};

(() => {
    mainCharacter.attack();
})();