//that function find element that obey an especific rule finding the value
export function findMethod(){
    const array: number[] = [1,2,3,4,5,6,7,8,9]

    function multipleOfTwo(el: number, index: number, array: number[]){
        return (el % 2 === 0)
    }

    console.log(array.find(multipleOfTwo))

    return ''
}