/*
法一 给a链表每个节点标记一下 遍历b链表 发现被标记的几点就返回 
 */
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

a x  b y y>x
a到头  b y-x
b到头  a到达b的y-x处 即此时a距离终点 y-y+x = x  b距离终点也是x  因此若有交点则他们一定会相遇

 */

var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 && p2) {
    if (p1 === p2) return p1;
    p1 = p1.next ? p1.next : null;
    p2 = p2.next ? p2.next : null;
  }
  if (!p1) {
    p1 = headB;
    // 这里不用给p2赋值了 因为在上个循环跳出之前 p2已经指向下个值了
    while (p1 && p2) {
      if (p1 === p2) return p1;
      p1 = p1.next ? p1.next : null;
      p2 = p2.next ? p2.next : headA;
    }
  } else {
    p2 = headA;
    while (p1 && p2) {
      if (p1 === p2) return p1;
      p1 = p1.next ? p1.next : headB;
      p2 = p2.next ? p2.next : null;
    }
  }
  return null;
};
