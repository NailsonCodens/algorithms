//Add elements in the end of the array
export function insertingElementEndOfArray(){
    const array: number[] = [1,2,3,4,5]
    const size = array.length

    //First Way
    array[size] = 10
    console.log(array)

    //Better Way
    array.push(20)
    console.log(array)

    return ''
}