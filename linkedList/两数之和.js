/*
用链表 节点值相加 对10取整存下一节点  对10取余 存余数 下两个节点相加加上这个余数
相当于逢十进一的意思  注意最后处理余数
 */

var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0)
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while(p1 || p2){
        const v1 = p1? p1.val : 0;
        const v2 = p2? p2.val : 0;
        const v3 = v1 + v2 + carry;
        p3.next = new ListNode(v3 % 10)
        carry = Math.floor(v3 / 10)
        if(p1)p1 = p1.next
        if(p2)p2 = p2.next
        p3 = p3.next
    }
    if(carry)
    {
        p3.next = new ListNode(carry)
    }
 
    return l3.next
    
 };