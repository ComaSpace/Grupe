function numberName(n) {
    const dictionary = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
    ];
    const text = '' + n;
    const numbers = text.split('');
    const result = [];

    for (const number of numbers) {
        const index = parseInt(number);
        result.push(dictionary[index]);
    }

    return result.join(' ');
}

function numberNameAscii(n) {
    const dictionary = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
    ];
    const text = '' + n;
    const result = [];

    for (const symbol of text) {
        const index = symbol.charCodeAt(0) - 48;
        result.push(dictionary[index]);
    }

    return result.join(' ');
}

function numberNameLoop(n) {
    const dictionary = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
    ];



    return '';
}

console.log(numberNameLoop(1234567890));

console.log(numberNameLoop(0), '-->', 'zero');
console.log(numberNameLoop(1), '-->', 'one');
console.log(numberNameLoop(9), '-->', 'nine');

console.log(numberNameLoop(19));
console.log(numberNameLoop(37));
console.log(numberNameLoop(58));
console.log(numberNameLoop(24));

console.log(numberNameLoop(314));
console.log(numberNameLoop(999));
console.log(numberNameLoop(666));
console.log(numberNameLoop(271));
