//Remove element in specific position of the array
export function removeElementSpecificPositionArray(){
    const array: number[] = [1,2,3,4]

    //@param start — The zero-based location in the array from which to start removing elements.
    //@param deleteCount — The number of elements to remove.
    //@param items — Elements to insert into the array in place of the deleted elements.

    //the first position is the index to start
    //the secound is to indicate how much i want deleting, in that case three.
    array.splice(4, 3)

    console.log(array)

    return ''
}