// create an object to store two functions
function saveAmount(min, max) {
    const minCeil = Math.ceil(min);
    console.log(minCeil)
    // console.log("min number:", minCeil); // returns 1
    const maxFloor = Math.floor(max);
    // console.log("max number:", maxFloor); // returns 15

    // print an array
    let sortedArr = []
    for(let i = minCeil -1; i<maxFloor; i++){
        sortedArr.push(i  + 1)
    }
    console.log(sortedArr);
  }

saveAmount(1, 100)

