export function maxProfitBuySellTwoPointers(prices){
    let maxP = 0;
    let minBuy = prices[0]; //10

    for (let sell of prices) {

        maxP = Math.max(maxP, sell - minBuy);
        //0, 10 - 10 = 0
        //0, 1 - 1 = 0
        //0, 5 - 1 = 4

        minBuy = Math.min(minBuy, sell);
        //10, 10 = 10
        //10, 1 = 1
        //4, 1 = 1

        console.log(maxP, minBuy)
    }
    return maxP;
}