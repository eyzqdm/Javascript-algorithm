var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  while (p1) {
    if (p1.flag) {
      return p1.val;
    } else {
      p1.flag = true;
    }
    p1 = p1.next ? p1.next : null;
  }
  p1.next = headB;

  while (p1) {
    if (p1.flag) {
      return p1.val;
    } else {
      p1.flag = true;
    }
    p1 = p1.next ? p1.next : null;
  }
  return null;
};

/*
法二 双指针法 p1 到达a末尾 指向b  p2到达b末尾 指向a

假设 a长6 b长8  在3处相交
当a到头 b还差俩到头
b到头  a在b的2处
b到a的头 a在b的头
同时到达交点

a x  b y
a到头  b y-x
b到头  a到达b的y-x处
b到a的头时  a到达 y-x+x = y 即a也到达b的头
此后 ab齐头并进 到达交点
 */