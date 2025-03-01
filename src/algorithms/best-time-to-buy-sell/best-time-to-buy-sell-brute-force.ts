export function maxProfitBruteForce(prices){
    //sell price[i] 1 - buy price[i] 10 = -9

    let res = 0

    for (let i = 0; i < prices.length; i++){
        let buy = prices[i];
        
        console.log(buy + ':buy')
        for(let j = i + 1; j < prices.length; j++){
            let sell = prices[j]

            console.log(sell + ': sell')

            console.log(sell - buy + ': calc ')
            res = Math.max(res, sell - buy)

            console.log(res + ': res')
        }
    }
    return res;
}