/*
贪心算法 以最小尺寸的饼干 满足最小胃口的孩子 
 */
var findContentChildren = function (g, s) {
  const sortFunc = (a, b) => {
    return a - b;
  };
  g.sort(sortFunc);
  s.sort(sortFunc);
  let i = 0;
  s.forEach((n) => {
    if (n >= g[i]) {
      i += 1;
    }
  });
  return i;
};
