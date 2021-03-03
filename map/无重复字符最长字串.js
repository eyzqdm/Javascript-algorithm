
var lengthOfLongestSubstring = function (s) {

    let p1 = 0
    let p2 = 0
    let map = new Map()
    let res = 0
    for (p1; p1 < s.length; p1++) {
        if (map.has(s[p1]) && map.get(s[p1]) >= p2) {
            p2 = map.get(s[p1]) + 1
        }
        map.set(s[p1], p1)
        res = Math.max(p1 - p2 + 1, res)
    }

    return res
};