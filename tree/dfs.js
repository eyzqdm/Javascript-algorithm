const tree = {
  val: "1",
  children: [
    {
      val: "2",
      children: [
        {
          val: "3",
          children: [],
        },
        {
          val: "4",
          children: [],
        },
      ],
    },
    {
      val: "5",
      children: [
        {
          val: "6",
          children: [],
        },
      ],
    },
  ],
};

// 非递归思路 使用栈？ 参考算法笔记

const dfs = (tree) => {
  console.log(tree.val);
  tree.children.forEach((i) => dfs(i));
};
dfs(tree);
