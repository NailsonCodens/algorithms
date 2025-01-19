//That function makes a sum of the whole array numbers
export function reduceArray(){
    const array: number[] = [1,2,3,4,5,6,7,8]

    const sum = array.reduce((prev, curr) => prev + curr)
    console.log(sum)

    return ''
}
