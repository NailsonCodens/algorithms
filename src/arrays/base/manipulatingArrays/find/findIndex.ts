//that function find element that obey an especific rule finding the index
export function findIndexMethod(){
    const array: number[] = [1,2,3,4,5,6,7,8,9,10,12]

    function multipleOfTwo(el: number, index: number, array: number[]){
        return (el % 2 === 0)
    }

    console.log(array.findIndex(multipleOfTwo))

    return ''
}