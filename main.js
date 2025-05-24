// connect this file to the DOM
const select = document.getElementById('todays-amount');
const acceptBtn = document.getElementById('amountThisRound');
const printBtn = document.getElementById('printtext')


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
        const num = result.shift(); // remove and get the first element
        select.innerText = "Amount to save today: $" + num;
        return num;
    } else {
        select.innerText = "Congratulations! You have reached your savings goal!";
    }
}

// total amount saved, printed to the DOM in consecutive order
function accept() {
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
    acceptBtn.innerText = "Amount saved this round: $" + sum;
    console.log("sum: ", sum);
    return sum;
  }
}


// console.log("accept(result)): ", accept(result))
console.log("accept:", accept(3, 2, 1, 4, 5)) // returns 15

function printtext(arr){
  // take in the result array
  // for the first item, if it is accepted, store the value in the DOM
  // for the next item, if it is accepted, add the value to the first number that is in the DOM and display that to the DOM
  // if the number is skipped, do nothin? or display the previous total?
  // printBtn.innerText= "This is what prints"
  printBtn.innerText = num
  let num = 0;
}

printtext([1, 2, 3, 4, 5]);