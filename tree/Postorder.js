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

/* const Postorder = (tree) => {
  if (!tree) return;
  Postorder(tree.left);
  Postorder(tree.right);
  console.log(tree.val);
}; */
/*
法一 后续遍历 左右根 而先序遍历是根左右  因此后续遍历即是将先序遍历变为根右左 再逆序输出即可 
 */
const Postorder = (tree) => {
  let stack = [];
  let outStack = [];
  stack.push(tree);
  while (stack.length) {
    const e = stack.pop();
    if (e) {
      outStack.push(e)
      stack.push(e.left);
      stack.push(e.right);
    }
  }
  while(outStack.length){
      console.log(outStack.pop().val)
  }
};

/*
法二
 */
Postorder(tree);
