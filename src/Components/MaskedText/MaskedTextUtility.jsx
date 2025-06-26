
export function getAllCharacters(word, usedletters) {
    usedletters = usedletters.map(letter => letter.toUpperCase());
    const guessedletters = new Set(usedletters);
    const characters = word.toUpperCase().split('').map((char) => {
        if (guessedletters.has(char)) {
            return char;
        }
        return '_';
    });
    return characters.join('');
}