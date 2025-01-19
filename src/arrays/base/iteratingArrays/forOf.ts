//That function interates arrays using a simples for of
export function forOf(){
    const array: number[] = [1,2,3,4]

    for (const n of array){
        console.log(n % 2 === 0 ? 'even' : 'odd')
    }

    return ''
}