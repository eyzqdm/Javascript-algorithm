/*
贪心
见好就收 局部最优 今天比昨天高 就昨天买今天卖 否则不动 
 */
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
};