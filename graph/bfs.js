
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

let visited = new Set();
let q = [];
const bfs = (root) => {
  q.push(root);
  visited.add(root)
  while (q.length) {
    const e = q.shift();
    console.log(e);
    // 在这添加会造成重复入队
    // 试想AB在同一层级且同时指向C  访问A时会将C入队 访问D时同样会入队
    // visited.add(e);
    graph[e].forEach((i) => {
      if (!visited.has(i)) {
        q.push(i);
        // 添加到以访问应该在这 因为既然入队了终究会被访问到 可以避免重复入队
        // 要注意 函数开头就有入队操作 因此要添加被访问
        visited.add(i)
      }
    });
  }
};

bfs(2)
console.log(visited)
