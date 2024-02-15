const abc = ['a', 'c', 'b', 'z', 'f', 's'];

abc.sort().reverse();
console.log(abc);

const marks = [300, 10, 2, 8, 22, 30, 4, 25, 6, 0];
marks.sort((a, b) => a - b);

console.log(marks);

const students = [
    { name: 'Jonas', age: 99, isMarried: true, marks: [10, 2, 8, 4, 6] },
    { name: 'Ona', age: 66, isMarried: true, marks: [7, 7, 7] },
    { name: 'Maryte', age: 88, isMarried: false, marks: [7, 6, 5, 4, 3] },
    { name: 'Petras', age: 77, isMarried: false, marks: [1] },
];

students.sort((a, b) => a.name - b.name);
console.log(students);

students.sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1);
console.log(students);

// Reikia apskaiciuoti kiekvieno studento pazymiu kieki ir tai prideti kaip nauja studento objekto rakta (marksCount).
// Reikia apskaiciuoti kiekvieno studento pazymiu vidurki ir tai prideti kaip nauja studento objekto rakta (marksAverage).
// Reikia rasti kiekvieno studento maziausia pazymi ir tai prideti kaip nauja studento objekto rakta (minMark).
// Reikia rasti kiekvieno studento didziausia pazymi ir tai prideti kaip nauja studento objekto rakta (maxMark).
// Reikia sudaryti studentu sarasa (pilni objektai), kuriu pazymiu vidurkis yra didesnis uz 5.
// Reikia sudaryti studentu vardu sarasa, kuriu pazymiu vidurkis yra didesnis uz 5.
