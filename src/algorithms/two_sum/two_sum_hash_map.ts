export function TwoSumHashMap(arr, target){
  const map = new Map()
  for(let i = 0; i < arr.length; i++){
    const diff = target - arr[i]; 
    //1 - 8 = 7 
    
    //map = 1

    //4 - 8 = 4 

    //map = 4

    //3 - 8 = 5

    //map = 3

    //5 - 8 = 3 


    console.log(diff)

    if(map.has(diff)){
      return [map.get(diff), i]
    }
    map.set(arr[i], i)
  }
}

console.log(TwoSumHashMap([1,4,3,5,2,8], 8))