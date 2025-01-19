//That function check if the number is Even or Odd
export function functionInteration(){
    const array: number[] = [1,2,3,4,5,6,7,8]

    //check if the number is Even or Odd
    function isEven(x: number){
        console.log(x)
        return x % 2 === 0 ? true : false
    }

    //using every. That function return false by default and stop
    // when encounter the first false
    const isEvenEvery = array.every(isEven)
    console.log('Using Every', isEvenEvery)

    //using some. That function return true by default
    // and stop when finds the first true
    const isEvenSome = array.some(isEven)
    console.log('Using Some', isEvenSome)

    //using foreach
    const isEvenForeach = array.forEach(x => console.log(x % 2 === 0))
    console.log('Using Foreach', isEvenForeach)

    //usingMap. That function return a new result array
    const isEvenMap = array.map(isEven)
    console.log('Using Map', isEvenMap)
    
    //usingFilter. That function return a new results array saving only trues
    const isEvenFilter = array.filter(isEven)
    console.log('Using Filter', isEvenFilter)

    return ''
}
