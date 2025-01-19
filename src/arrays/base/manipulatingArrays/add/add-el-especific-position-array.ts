//Add element in specific position of the array
export function addElementSpecificPositionArray(){
    const array: number[] = [1,2,3,4]

    //@param start — The zero-based location in the array from which to start removing elements.
    //@param deleteCount — The number of elements to remove.
    //@param items — Elements to insert into the array in place of the deleted elements.

    //the first position is the index to start
    //the secound is about delte something, we not gonna delete anything
    //the rest of the parameters is for adding
    array.splice(4, 0, 5,6,7)

    console.log(array)

    return ''
}