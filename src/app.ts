import { maxProfitBruteForce } from "./algorithms/best-time-to-buy-sell/best-time-to-buy-sell-brute-force";
import { maxProfitBuySellTwoPointers } from "./algorithms/best-time-to-buy-sell/best-time-to-buy-sell-dynamic_programming";
import { maxProfitTwoPinters } from "./algorithms/best-time-to-buy-sell/best-time-to-buy-sell-two-pointers";
import { anagramBruteForce, anagramHashTable, containsDuplicateBruteForce, containsDuplicateSorting, twoSumBruteForce, TwoSumHashMap } from "./algorithms/contains_duplicate";
import { groupAnagramSort } from "./algorithms/group_anagram/group_anagram_sort";
import { addElementSpecificPositionArray, custonObjectSort, daysOfWeek, fibonnaci, fill, findIndexMethod, findMethod, forOf, from, functionInteration, includeMethod, indexOfFind, insertingElementBeginningOfArray, insertingElementEndOfArray, joinningArrays, lastIndexOfFind, MultiDimensionalArrays, numberSort, numberSortReverse, reduceArray, removingElementBeginningOfArray, removingElementEndOfArray, stringCaseSensitiveAccentSort, stringSort, stringSortReserve, twoDimensionalArrays } from "./arrays";
import { TurnArrayIntoString, TurnStringIntoArray, TurnStringIntoNumber } from "./strings-and-numbers";

/***********
    Arrays
************/
//console.log(daysOfWeek())
//console.log(insertingElementEndOfArray())
//console.log(insertingElementBeginningOfArray())
//console.log(removingElementEndOfArray())
//console.log(removingElementBeginningOfArray())
//console.log(addElementSpecificPositionArray())
//console.log(fibonnaci(20))
//console.log(twoDimensionalArrays())
//console.log(MultiDimensionalArrays())
//console.log(joinningArrays())
//console.log(functionInteration())
//console.log(reduceArray())
//console.log(forOf())
//console.log(fill())

/***********
    Strings
************/
//console.log(TurnArrayIntoString())
//console.log(TurnStringIntoArray())
//console.log(TurnStringIntoNumber())
//console.log(stringSort())
//console.log(stringSortReserve())
//console.log(numberSort())
//console.log(numberSortReverse())
//console.log(custonObjectSort())
//console.log(stringCaseSensitiveAccentSort())
//console.log(lastIndexOfFind())
//console.log(indexOfFind())
//console.log(findMethod())
//console.log(findIndexMethod())
//console.log(includeMethod())

/***********
    Easy Algorithms
************/
/*console.log(
    containsDuplicateBruteForce([1,2,3,4,5,6,7,3])
)

console.log(
    containsDuplicateSorting([1,2,3,4,5,6,7,3])    
)
*/

/*console.log(anagramBruteForce('racecar', 'carrace'))*/

/*console.log(anagramHashTable('racecar', 'carrace'))*/

//console.log(twoSumBruteForce([1,4,3,5,2,8], 7))

//console.log(TwoSumHashMap([1,4,3,5,2,8], 8))

//console.log(groupAnagramSort(["act","pots","tops","cat","stop","hat"]))

//console.log(maxProfitBruteForce([10,1,5,6,7,1]))

//console.log(maxProfitTwoPinters([10,1,5,6,7,1]))

console.log(maxProfitBuySellTwoPointers([10,1,5,6,7,1]))


/***
 * 
 * structure datas:
 * 
 */

const hashTable = {};

hashTable["name"] = "Alice";
hashTable["age"] = 25;

console.log(hashTable); // Alice
console.log(hashTable["age"]); // 25

console.log(hashTable)

const map = new Map();
map.set("name", "Alice");
map.set("age", 25);

console.log(map)


const stack = []
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop() //30
stack.pop() //20

console.log(stack)

const queue = []

queue.push(10)
queue.push(20)
queue.push(30)
queue.shift()

console.log(queue)