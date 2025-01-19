//Joining arrays
export function joinningArrays(){
    const zero = 0;
    const positiveNumbers = [1,2,3]
    const negativeNumbers = [-1,-2,-3]

    //We need to start from the first array of the numeral sequence.
    //You can do in another way but your out put gonna be different.
    let numbers = negativeNumbers.concat(zero, positiveNumbers)
    console.log(numbers)

    return ''
}