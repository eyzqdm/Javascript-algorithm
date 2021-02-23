var inorderTraversal = function (root) {
    const res = []
    const stack = []
    var node = null
    if (root) stack.push(root)
    while (stack.length) {
        node = stack.pop()
        if (typeof node === "number") {
            res.push(node)
        }
        else {

            if (node.right) stack.push(node.right)
            stack.push(node.val)
            if (node.left) stack.push(node.left)
        }

    }
    return res
};