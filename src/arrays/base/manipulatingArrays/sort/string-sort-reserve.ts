export function stringSortReserve(){
    let array: string[] = ["banana", "apple", "grape", "cherry"];

    // sort by ascending sort and after make de reserve
    array.sort().reverse();
    
    console.log(array); // Out put: ['grape', 'cherry', 'banana', 'apple']
    return ''
}