function manipulateArray1(arr) {
    return arr.map(x => x * 2); // Example manipulation
}

function manipulateArray2(arr) {
    return arr.filter(x => x > 5); // Another manipulation
}

const originalArray = [1, 2, 3, 4, 5];

// Pass the result of manipulateArray1 directly into manipulateArray2
const result = manipulateArray2(manipulateArray1(originalArray));

console.log(result); // Output: [6, 8, 10]

// You can also do this with arrow functions, or even compose functions if you have many transformations.
// Using intermediate steps (optional):
const step1 = manipulateArray1(originalArray);
const step2 = manipulateArray2(step1);
console.log(step2);
