export function stringCaseSensitiveAccentSort(){
    let array: string[] = ["Maève", "nailson", "Sara", "Lucy"];

    // Sort by ascending sort
    array.sort((a,b) => a.localeCompare(b, 'en', { sensitivity: 'case' }));
    
    console.log(array); // Saída: ['grape', 'cherry', 'banana', 'apple']
    return ''
}