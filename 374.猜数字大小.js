/**
 * 猜数字游戏的规则如下：
每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：
-1：我选出的数字比你猜的数字小 pick < num
1：我选出的数字比你猜的数字大 pick > num
0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num
返回我选出的数字。
 */
/* var guessNumber = function (n) {

    let low = 0
    let high = n
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (guess(mid) === -1) {
            high = mid - 1
        } else if (guess(mid) === 1) {
            low = mid + 1
        } else {
            return mid
        }
    }

}; */
var guessNumber = function (n) {
    let low = 1;
    let high = n;
    const rec = (l, h) => {
        if (l > h) return
        const mid = Math.floor((l + h) / 2);
        const res = guess(mid)
        if (res === 0) {
            return mid;
        } else if (res === 1) {
            return rec(mid + 1, h);
        } else {
            return rec(l, mid - 1);
        }
    };
    return rec(low, high);
};
