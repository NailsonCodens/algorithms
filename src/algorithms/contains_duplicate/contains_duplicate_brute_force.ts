/*
    Complexity time: O(n2) | O n squared because o have two loops for. n is just the size of the input array

    Complexity space: O(1) | We don't need extra memory to do that
*/
export function containsDuplicateBruteForce(arr: number[]){
    const amount = arr.length
    let hasDuplicated = false

    for(let i = 0; i < amount; i++){
        for(let j = i + 1; j < amount; j++){
            if(arr[i] === arr[j]){
                return hasDuplicated = true
            }
        }
    }

    return hasDuplicated
}