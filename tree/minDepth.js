

/* 用广优 遇到叶子则立即停止
重点是要给每个节点标记一下其自身的深度
 */
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