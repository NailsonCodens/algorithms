//Add elements in the beginning of the array
export function insertingElementBeginningOfArray(){
    const array: number[] = [1,2,3,4]
    
    array.unshift(0)
    array.unshift(-1)
    array.unshift(-2)

    console.log(array)

    return ''
}