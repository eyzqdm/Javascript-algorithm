/*
两个树镜像
1 根节点值相等
2 a树左子树和b树右子树镜像
3 a树右子树和b树左子树镜像
 */
var isSymmetric = function (root) {
  if (!root) return true;
  const ismirror = (l, r) => {
    if (!l && !r) return true;
    if (
      l &&
      r &&
      l.val === r.val &&
      ismirror(l.left, r.right) &&
      ismirror(l.right, r.left)
    ) {
      return true;
    }
    return false;
  };

  return ismirror(root.left, root.right);
};
