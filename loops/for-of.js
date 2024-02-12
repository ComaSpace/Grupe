const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`${student.name}: ${student.age}`);
}

for (const student of students) {
    console.log(`${student.name}: ${student.age}`);
}

//                0   1   2   3   4
const numbers = [10, 20, 80, 40, 60];
//               **      **      **

let suma = 0;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log('--', number);
}

for (const number of numbers) {
    console.log('--', number);
}
console.clear();

const text = 'Pomidoras';

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    console.log(i, letter);
}

for (const letter of text) {
    console.log(letter);
}
