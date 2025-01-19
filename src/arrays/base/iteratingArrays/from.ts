//That function use from to create another array using conditions
export function from(){
    const array: number[] = [1,2,3,4]

    //Copy the array passing a function cheking by each interation if 
    // the number is even or odd 
    let array2 = Array.from(array, x => (x % 2 === 0))

    console.log(array2)

    return ''
}