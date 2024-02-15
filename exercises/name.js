function rightName(word = 'Labas') {
    let name = word                         // Labas
        .toLowerCase()                      // labas
        .replace(
            word[0],                        // L - tokios nera :(
            word[0].toUpperCase()           // L
        );
    return name;
}
