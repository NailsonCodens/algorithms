export function twoSumBruteForce(arr, target){
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; i++){
      if(arr[i] + arr[j] === target){
        return [i, j]
      }
    }
  }
}