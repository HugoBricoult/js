function character(name, level, life, weapon) {
    this.name = name;
    this.level = level;
    this.life = life;
    this.weapon = weapon;
    this.attack = () => {};
    this.recieveDamage = () => {};
}


(() => {
    let opponentCharacter = new character("joseph", 12, 89, { "name": "Axe", "damage": 9 });
    let mainCharacter = new character("jean-marc", 9, 99, { "name": "épée", "damage": 8 });
    console.log(mainCharacter.name + " attaque " + opponentCharacter.name);
    console.log("avec l'arme " + mainCharacter.weapon.name);
    let damage = mainCharacter.weapon.damage * mainCharacter.level;
    console.log("et lui inflige " + damage + " de dégats");

    console.log(opponentCharacter.name + " a maintenant " + (opponentCharacter.life - damage) + " de vie");
})();