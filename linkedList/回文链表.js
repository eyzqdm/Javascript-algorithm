var isPalindrome = function (head) {
    if (!head) return true;
    let arr = [];
    let p = head;
    while (p) {
      arr.push(p.val);
      p = p.next ? p.next : null;
    }
    let i = 0;
    let j = arr.length - 1;
    console.log(arr)
    while (i < j) {
      if (arr[i] !== arr[j]) {
        return false;
      }
  
      i++;
      j--;
    }
  
    return true;
  };