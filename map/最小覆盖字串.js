var minWindow = function (s, t) {
  // 总体原则 先移动右指针 找到包含所需字符的字串 再移动左指针 尽量缩短长度
  // 左指针移动过程中导致不包含所需字符时，继续移动右指针，寻找下个包含所需字符的子串
  if (s.length < t.length) return "";
  let l = 0; // 左指针
  let r = 0; // 右指针
  const need = new Map(); // 所需要的所有字符及其个数
  t.split("").forEach((i) => need.set(i, need.has(i) ? need.get(i) + 1 : 1));
  let needType = need.size; // 所需字符类型 当类型为零说明匹配成功
  let res = "";
  while (r < s.length) {
    const c = s[r]; // 右指针当前字符
    if (need.has(c)) {
      /* 右字符含于所需字符，则对应数量减一。当对应数量减为零，则所需类型数量减一 */
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) needType -= 1;
    }
    while (needType === 0) {
      /*
          此时已包含所需字符 先存储当前串的长度 当左字符含于所需字符 说明被需要的字符即将被踢出去了
        则对应字符的数量加一。当其数量为一时，说明这是一个新字符 类型数量加一。左指针移动 踢出当前字符
        当类型数不为零 才会跳出循环 继续移动右指针 寻找下一个包含所需字符的子串
           */
      const newRes = s.substring(l, r + 1);
      if (!res || res.length > newRes.length) res = newRes;
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType += 1;
      }
      l += 1;
    }
    r += 1;
  }
  return res;
};

console.log(minWindow("A", "A"));
