/*
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
*/

var addStrings = function(num1, num2) {

// 先反转 再相加？
};


var reverseList = function (head) {

    let p1 = head;
    let p2 = null;
    let temp = null;
    while (p1) {
     
     temp = p1.next
     p1.next = p2
     p2 = p1
     p1 = temp
    }

    return p2
}

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