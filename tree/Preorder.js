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

/* const Preorder = (tree) => {

    if(!tree) return
    console.log(tree.val)
    Preorder(tree.left)
    Preorder(tree.right)
} */

/* 非递归实现 根左右 因此右孩子先入栈 */
const Preorder = (tree) => {
  let stack = [];
  stack.push(tree);
  while (stack.length) {
    const e = stack.pop();
    if (e) {
      console.log(e.val);
      stack.push(e.right);
      stack.push(e.left);
    }
  }
};

Preorder(tree);
