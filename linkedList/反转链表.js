
/*
利用中间指针temp保存当前节点的下一节点 防止丢失  
 */
var reverseList = function (head) {

    let p1 = head;
    let p2 = null;
    let temp = null;
    while (p1) {
     // 暂存下一节点
     temp = p1.next
     // 指针反转 p2是当前节点
     p1.next = p2
     // p2指向下一级点
     p2 = p1
     // p1往前走 指向下一个要反转的节点
     p1 = temp
    }

    return p2
};