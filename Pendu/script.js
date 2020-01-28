(() => {
    const WORD = ['b', 'o', 'n', 'j', 'o', 'u', 'r'];
    let find = [' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let letters = new Set();
    letters.add(':');
    letters.add(' ');
    let jouer = true;
    let count = 0;
    while (jouer) {
        let letter = prompt("Le mot : " + find.reduce((a, b) =>
            a += b.replace(' ', ' _ ')
        ) + " les lettres utilisées " + Array.from(letters).reduce((a, b) => a += b));
        for (let i = 0; i < WORD.length; i++) {
            if (letter == WORD[i]) {
                letters.add(letter);
                find[i] = letter;
                count++;
            } else {
                letters.add(letter);
            }
            if (count == 7) {
                alert("c'est gagné ! le mot était : " + WORD.reduce((a, b) => a += b));
                jouer = false;
            }
        }
    }
})();