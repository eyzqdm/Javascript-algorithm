var minDepth = function (root) {

    if (!root) return 0
    let queue = [[root,1]]
    while (queue.length) {
        const [e, l] = queue.shift()
        if (!e.left && !e.right) {
            return l
        }
        else {
            e.left && queue.push([e.left, l + 1])
            e.right && queue.push([e.right, l + 1])
        }
    }
};