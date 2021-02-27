var getKthFromEnd = function(head, k) {
    let p1 = head
    let p2 = head
    let num = 0
    while(p1){
        num ++
        if(num > k) p2 = p2.next
        p1 = p1.next
    }
    return p2

};