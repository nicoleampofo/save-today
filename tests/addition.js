// sum the total amount saved

// function name: totalSavedThisRound
// takes in num from function printNextNumber
// adds each one together
// returns the total sum

function totalSavedThisRound(num){
    // newVariable = old total plus new number
    if (num.length > 0){
        const total = Math.ceil(num);
        console.log(total)
    }
}
totalSavedThisRound([1,2,3,4,5])