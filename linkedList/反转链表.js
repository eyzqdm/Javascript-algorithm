
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
};