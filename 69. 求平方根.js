var mySqrt = function (x) {
    if (x === 1) return x
    const isSq = (e, t) => {
        const x1 = Math.pow(e, 2)
        const x2 = Math.pow(e + 1, 2)
        if ((x1 <= t && x2 > t)) return 0
        if (x1 > t) return 1
        if (x1 < t) return -1
    }
    let low = 0
    let high = Math.floor(x / 2)
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (isSq(mid, x) === 0) return mid
        if (isSq(mid, x) === 1) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
};