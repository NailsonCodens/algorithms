/*
The Fibonacci sequence is a series of numbers where each 
number is the sum of the two preceding ones. 
The first two numbers of the sequence are typically 0 and 1. 
The sequence progresses as follows:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Your task is to write a program that generates the Fibonacci sequence. 
The program should meet the following requirements:

The program should ask the user for the number of terms they want to 
generate.
The generated sequence should be displayed as a list, starting from 0.
(Optional) Allow the user to choose whether they want the Fibonacci 
sequence generated iteratively or recursively.
Example Input and Output:
If the user inputs 7, the program should display:
[0, 1, 1, 2, 3, 5, 8]

Additional Requirements (Optional):

Validate the user input to ensure it is a positive integer.
Implement an efficient solution to handle larger inputs.

Zero is ignored in fibonacci sequence. For the first numbers we using 1 and 1
*/

export function fibonnaci(target: number){
    //var that will receive the sequence
    const fibonacci: number[] = [];
    fibonacci[0] = 0
    //first value following the main rule of sequence
    fibonacci[1] = 1
    //second value following the main rule of sequence
    fibonacci[2] = 1
 
    //iterate by the element until the target to get de sequence.
    /*
        The iterator i is using the number 3 because we already 
        have fibonnaci[1] and fibonnaci[2] with their default values
        it is crucial for the good working of fibonacci
    */
    for (let i = 3; i < target; i++){
        // 1 - current fibonacci will receive a sum
        // 2 - currenct fibonacci[i - 1] minus 1 to get the previous value  
        // 3 - current fibonacci[i - 2] minus 2 to get the penultimate value
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    console.log(fibonacci)

    return ''
}