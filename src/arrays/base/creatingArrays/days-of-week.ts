
export function daysOfWeek(){
    let daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let size: number = daysOfWeek.length
    
    for (let i = 0; i < size; i++) {
        console.log(`daysOfWeek[${i}]`, daysOfWeek[i])
    }    

    return ''
}

