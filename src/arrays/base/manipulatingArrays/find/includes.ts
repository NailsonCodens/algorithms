//that function find element using include
export function includeMethod(){
    const array: number[] = [1,2,3,4,5,6,7,8,9,10,12]

    //first parameter = the value a want, the second is the start to looking for
    const value = array.includes(2,1)

    console.log(value)

    return ''
}