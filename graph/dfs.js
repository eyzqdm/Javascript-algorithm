const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

let visited = new Set();
const dfs = (root) => {
  console.log(root);
  visited.add(root);
  graph[root].forEach((i) => {
    if (!visited.has(i)) {
      dfs(i);
    }
  });
};

dfs(2);
