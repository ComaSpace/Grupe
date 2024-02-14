function formatName(text) {
    // Kaip apibudinti kas yra tvarkingai suformatuotas vardas?
    // - Pirma didzioji
    // - Kitos mazosios

    const firstLetter = text[0].toUpperCase();
    const otherLetters = text.slice(1).toLowerCase();

    return firstLetter + otherLetters;
}

console.log(formatName('jonas'), '->', 'Jonas');
console.log(formatName('oNA'), '->', 'Ona');
console.log(formatName('PeTrAs'), '->', 'Petras');
console.log(formatName('Maryte'), '->', 'Maryte');


function abbbbr(fullname) {
    const words = fullname.split(' ');
    let result = '';

    for (const word of words) {
        result += `${word[0]}.`;
    }

    return result;
}

console.log(abbbbr('Chuck Norris'));
console.log(abbbbr('Pamela Anderson'));
console.log(abbbbr('David Haselhofas'));
console.log(abbbbr('Zan Klod Van Dam'));
