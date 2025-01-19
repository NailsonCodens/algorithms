//That function fill the array with values
export function fill(){
    const array: number[] = [1,2,3,4]

    //value, start index, end index
    array.fill(10, 1, 2)

    console.log(array)

    return ''
}