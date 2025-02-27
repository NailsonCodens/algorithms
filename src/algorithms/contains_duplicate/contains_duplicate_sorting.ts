/*
    Complexity time: O (n log n) bottlenack because i need to sort before. Im checking by neighors duplicates

    Complexity space: O(1) or O(n) depending on the sorting algorithm.
*/
export function containsDuplicateSorting(arr: number[]){
    const sortedArray = arr.sort()
    const amount = sortedArray.length

    for(let i =0; i < amount; i++){
        if(sortedArray[i] === sortedArray[i - 1]){
            return true
        }
    }

    return false;
}