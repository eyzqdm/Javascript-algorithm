var preorderTraversal = function(root) {
  
    const res = []
    const stack = []
    var node = null
    if(root) stack.push(root)
    while(stack.length){
        node = stack.pop()
        res.push(node.val)
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    return res
  };