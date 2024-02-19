const marks = [10, 2, 8, 4, 6, 0];

const first = marks[0];
const second = marks[1];
const third = marks[2];
const restMarks = marks.slice(3);
// const restMarks = marks.filter((_, index) => index >= 2);

console.log(first, second, third, restMarks);

// [] = array
// vadiname destrukturizavimas
// ... yra "rest" (lt. likę, visi kiti) operatorius
const [a, b, c, ...restABC] = marks;
console.log(a, b, c, restABC);

const t1 = [1, 2];
const t2 = [3, 4, 5];
const t3 = [6, 7, 8, 9];

const t12 = t1.concat(t2);
console.log(t12);

const t123 = t1.concat(t2, t3);
console.log(t123);

// ... yra "spread" (lt. išskleidimo) operatorius
const rest12 = [...t1, ...t2];
console.log(rest12);

const rest123 = [...t1, ...t2, ...t3];
console.log(rest123);
