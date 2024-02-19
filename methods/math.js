const marks = [10, 2, 8, 4, 6];

const min = Math.min(10, 2, 8, 4, 6);
console.log(min);

const max = Math.max(10, 2, 8, 4, 6);
console.log(max);

const min2 = Math.min(...marks);
console.log(min2);

const max2 = Math.max(...marks);
console.log(max2);

function findMax(list) {
    let maxNumber = list[0];

    for (const number of list) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }

    return maxNumber;
}

console.log(findMax(marks));
console.log(findMax([1, 2, 3]));
console.log(findMax([1, 2, 33333, 5485, 5]));
console.log(findMax([1, 2, -3]));
console.log(findMax([-1, -2, -3]));
