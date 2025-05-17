// result = [1, 2, 3, 4, 5]

// // total amount saved
// function accept(arr) {
//    for(i = 0; i <= result.length; i++){
//       perroLike = Number(arr[0]) + Number(arr[1])
//       arr.shift();
//       console.log(perroLike)
//    // take in result
//    // add first two numbers together whenever the button is pushed
//    // end the addition when you get to the end of the array
//    }
// }

// console.log(accept(result))




// //
// //       console.log("arr = ", arr)
// //       console.log("perroLike = ", perroLike)
// //       console.log("arr[0] = ",arr[0], "arr[1] =", arr[1])

function accept(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum)
  }
}

accept([1, 2, 3, 4, 5])