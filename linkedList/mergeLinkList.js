function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let f2 = new ListNode(4)
let f1 = new ListNode(1,f2)


let f4 = new ListNode(3)


var mergeTwoLists = function (l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
  let r = new ListNode();
  let p1 = l1;
  let p2 = l2;
  let p3 = null; // 新链表辅助结点
  if (p1.val > p2.val) {
    r = p2;
    p2 = p2.next;
  } else {
    r = p1;
    p1 = p1.next;
  }
  p3 = r;
  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p3.next = p2
      p2 = p2.next;
    } else {
      p3.next = p1;
      p1 = p1.next;
    }
    p3 = p3.next
  }
 // console.log(p1,p2)
  if (p1) p3.next = p1;
  else if (p2) p3.next = p2;
  return r;
};
console.log(mergeTwoLists(f1,f4))
