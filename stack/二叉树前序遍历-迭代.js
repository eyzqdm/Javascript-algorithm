var preorderTraversal = function(root) {
    const res = []
    const stack = []
    var node = null
    if(root) stack.push(root)
    while(stack.length){
        node = stack.pop()
        if(!node.right&&!node.left){
            res.push(node.value)
            continue
        } 
        if(node.right) stack.push(node.right)
        stack.push(node.value)
        if(node.left) stack.push(node.left)
    }
    return res
  };