// connect this file to the DOM
const select = document.getElementById('todays-amount');
const acceptBtn = document.getElementById('amountThisRound');
// const skipBtn = document.getElementById('printtext')


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
        // document.getElementById("visible-btn").disabled = true;
    } else {
        select.innerText = "Congratulations! You have completed the savings challenge!";
        document.getElementById("accept-btn").disabled = true;
    }
}

// total amount saved, printed to the DOM in consecutive order
sum = result[0];
console.log("sum before loop", sum)

function accept() {
  if (result.length >= 0) {
    acceptBtn.innerText = "Amount saved this round: $" + sum;
    sum += result[0];
    // document.getElementById("visible-btn").disabled = false;
    console.log("accept sum:", sum);
  }
}

// for skip function, enable button after Skip is selected


// function printtext(arr){
//   // take in the result array
//   // for the first item, if it is accepted, store the value in the DOM
//   // for the next item, if it is accepted, add the value to the first number that is in the DOM and display that to the DOM
//   // if the number is skipped, do nothin? or display the previous total?
//   // printBtn.innerText= "This is what prints"

//   let num = 0;
// }

// printtext([1, 2, 3, 4, 5]);