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

/* const Middle = (tree) => {
  if (!tree) return;
  Middle(tree.left);
  console.log(tree.val);
  Middle(tree.right);
}; */
/* 中序非递归 
根节点入栈
循环以下操作
若栈顶左孩子存在 则入栈 循环执行
当栈顶左孩子不存在 出栈并输出 同时检查右孩子是否存在 存在则入栈
 */
const Middle = (tree) => {
  let stack = [];
  p = tree
  while (stack.length || p!==null) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    let e = stack.pop()
    console.log(e.val);
    p = e.right
    //if (p) stack.push();
  }
};
Middle(tree);
