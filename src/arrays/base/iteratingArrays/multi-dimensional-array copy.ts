//This array has 3 layers of arrays with anothers arrays inside these layers.
export function MultiDimensionalArrays(){
    let matrix3x3x3: number[][][] = []

    // i < 3 indicates we have 3 layers
    // i is the first layer
    for(let i = 0; i < 3; i++){
        matrix3x3x3[i] = [];
        //our result up to now [ [], [], [] ]
        for(let j = 0; j < 3; j++){
            matrix3x3x3[i][j] = [];
            //our result up to now 
            // [ [ [], [], [] ], [ [], [], [] ], [ [], [], [] ] ]
            for(let z = 0; z < 3; z++){
                matrix3x3x3[i][j][z] = i + j + z;
            }
        }
    }

    console.log(matrix3x3x3)

    return ''
}