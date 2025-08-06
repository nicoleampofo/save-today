// connect this file to the DOM
const select = document.getElementById('todays-amount');
const amountSavedThisRound = document.getElementById('amountThisRound');


// create a function to take two numbers and create a sorted array with the specified min and max
function sortedArray(min, max) {
  const minCeil = Math.ceil(min);
//   console.log("minCeil: ", minCeil) // returns minimum number
  const maxFloor = Math.floor(max);
//   console.log("maxFloor: ", maxFloor) // returns maximum number

  // print an array
  let sortedArr = []
  for(let i = minCeil -1; i<maxFloor; i++){
      sortedArr.push(i  + 1)
  }
  return sortedArr;
}

// store the sorted array above in a variable
const myRange = sortedArray(1, 5);
// console.log(myRange)

// function to randomize numbers in the above array
function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
        return(array)
}

// run the randomizing function on the variable for the sorted array
const result = randomizeArray(myRange);
console.log("result: ", result);

// print one number at a time to the DOM

function printNextNumber() {
    if (result.length > 0) {
        let num = result.shift(); // remove and get the first element
        select.innerText = "Amount to save today: $" + num;
        // document.getElementById("save-btn").disabled = true;
        // document.getElementById("accept-btn").disabled = false;
        // document.getElementById("skip-btn").disabled = false;
    } else {
        select.innerText = "Congratulations! You have completed the savings challenge!";
        // document.getElementById("accept-btn").disabled = true;
        // document.getElementById("skip-btn").disabled = true;
    }
}

// total amount saved, printed to the DOM in consecutive order
sum = result[0];
console.log("sum before loop", sum)

function accept() {
  if (result.length >= 0) {
    amountSavedThisRound.innerText = "Amount saved this round: $" + sum;
    sum += result[0];
    // document.getElementById("save-btn").disabled = false;
    // document.getElementById("accept-btn").disabled = true;
    // document.getElementById("skip-btn").disabled = true;
    console.log("accept sum:", sum);
  }
}


function skip() {
  sum += 0;
  // document.getElementById("skip-btn").disabled = true;
  // document.getElementById("save-btn").disabled = false;

}


// var acceptBtn = document.getElementById('accept-btn');
// var skipBtn = document.getElementById('skip-btn');

// const arr = [];

// function accept() {
//     arr.push(1);
//     let result = arr.reduce ((sum, current) =>
//     sum + current, 0)

// console.log("nicole", result)
// }
// function skip() {
//     arr.push(2)
//     let result = arr.reduce ((sum, current) =>
//     sum + current, 0)

// console.log("nicole", result)
// }