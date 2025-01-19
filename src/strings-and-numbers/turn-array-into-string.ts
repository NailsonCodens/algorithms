export function TurnStringIntoArray(){
    const string: string = "Hello i'm John Doe";

    //Nice way
    const split = string.split(' ')
    console.log(split)

    //Professional way
    const arrayFrom = Array.from(string)
    console.log(arrayFrom)

    //Sofisticated way
    const array = [...string]
    console.log(array)
    return ''
}