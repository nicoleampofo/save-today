function accept(result) {
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    console.log(sum += result[i]);
  }
}

accept([3,5,1,2,4])