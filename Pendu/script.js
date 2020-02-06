(() => {
    const WORD = ['b', 'o', 'n', 'j', 'o', 'u', 'r'];
    let find = ['$', '$', '$', '$', '$', '$', '$'];
    let letters = new Set();
    letters.add(':');
    letters.add(' ');
    let jouer = true;
    let count = 0;
    let trys = 0;
    while (jouer) {
        let letter = prompt("Le mot : " + find.join(' ').replace(/([$])/g, '_') +
            " les lettres utilisées " + Array.from(letters).reduce((a, b) => a += b));
        trys++;
        for (let i = 0; i < WORD.length; i++) {
            if (letter.trim().length > 1) {
                trys--;
                break;
            }
            if (letter.trim() == WORD[i]) {
                letters.add(letter.trim());
                find[i] = letter.trim();
                count++;
            } else {
                letters.add(letter.trim());
            }
            if (count == 7) {
                alert("c'est gagné ! le mot était : \"" + WORD.join('') + "\" Vous avez gagné en " + trys + " coups.");
                jouer = false;
            }
        }
    }
})();