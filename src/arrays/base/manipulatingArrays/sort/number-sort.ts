export function numberSort(){
    let array: number[] = [10,4,5,6,9];
    
    function compare(a: number,b: number){
        if(a < b){
            return -1;
        }

        if(a > b){
            return 1;
        }

        return 0
    }

    array.sort(compare)

    console.log(array)

    return ''
}