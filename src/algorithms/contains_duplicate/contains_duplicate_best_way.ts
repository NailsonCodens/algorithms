/*
    Complexity time: O(n)

    Complexity space: O(n)
*/
export function containsDuplicateBestWay(arr: number[]){
    const seen = new Set() //could be a Map or a object
    let hasDuplicated = false

    for (const num of arr){
        if(seen.has(num)){
            hasDuplicated = true
        }
        seen.add(num)
    }

    return hasDuplicated
}