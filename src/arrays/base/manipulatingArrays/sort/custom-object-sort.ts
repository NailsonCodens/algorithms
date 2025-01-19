//Compare and sort the object of the array by age
export function custonObjectSort(){
    let array: Array<any>  = [
        {name: 'Nailson Israel', age: 29},
        {name: 'John Doe', age: 22},
        {name: 'Ana', age: 19},
        {name: 'Chris', age: 25},
    ];
    
    function comparePerson(a: any,b: any){
        if(a.age < b.age){
            return -1;
        }

        if(a.age > b.age){
            return 1;
        }

        return 0
    }
    
    array.sort(comparePerson)

    console.log(array)

    return ''
}