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

// 先访问的元素 其子元素也应先处理 复合先入先出 使用队列 孩子依次入队 

const bfs = (tree) => {
  const queue = [tree];
  while (queue.length) {
    const e = queue.shift();
    console.log(e.val);
    e.children.forEach((i) => {
      queue.push(i);
    });
  }
};

bfs(tree);
