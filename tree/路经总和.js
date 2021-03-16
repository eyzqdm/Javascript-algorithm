var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let res = false;

  const dfs = (r, s) => {
    if (!r) return;
    if (!r.left && !r.right && s === targetSum) {
      res = true;
      return;
    }
    r.left && dfs(r.left, s + r.left.val);
    r.right && dfs(r.right, s + r.right.val);
  };

  dfs(root, root.val);
  return res;
};
