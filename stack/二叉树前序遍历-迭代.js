const tree = {
    val: "1",
    left: {
      val: "2",
      left: {
        val: "3",
        left: null,
        right: null,
      },
      right: {
        val: "4",
        left: null,
        right: null,
      },
    },
    right: {
      val: "5",
      left: null,
      right: {
        val: "6",
        left: null,
        right: null,
      },
    },
  };
  

var preorderTraversal = function(root) {
    const res = []
    const stack = []
    var node = null
    if(root) stack.push(root)
    while(stack.length){
        node = stack.pop()
        if(!node.right&&!node.left){
            res.push(node.val)
            continue
        } 
        if(node.right) stack.push(node.right)
        stack.push(node.value)
        if(node.left) stack.push(node.left)
    }
    return res
  };

  console.log(preorderTraversal(tree))