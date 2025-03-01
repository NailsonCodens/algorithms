export function maxProfitTwoPinters(prices){
    let l = 0, r = 1;
    let maxP = 0;

    //l = 0; r =1;
    //l = 1 r =2; 
        //profit = 5 - 1 = 4 
        //maxP = 4
    //l = 1 r=3;
        //profit = 3 - 1 = 2
    // l =1 r=4
        //profit = 6 - 1 = 5
    // l =1 r= 4
        //profit = 4 - 1 = 3

    while (r < prices.length) {
        console.log(l,r)
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            console.log(profit)

            maxP = Math.max(maxP, profit);
        } else {
            l = r;
        }
        r++;
    }
    return maxP;
}