export function TurnStringIntoNumber(){
    const string: string = "123";

    //Nice way
    const str = "123";
    const num = parseInt(str);
    console.log(num);  // 123

    //Nice way
    const strFloat = "123.45";
    const numFloat = parseFloat(strFloat);
    console.log(numFloat);  // 123.45

    //Nice way
    const strNumber = "123.45";
    const numNumber = Number(strNumber);
    console.log(numNumber);  // 123.45


    return ''
}