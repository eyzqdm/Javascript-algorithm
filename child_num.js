function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

function num(arr) {
  let count = 1;
  arr[0] = new ListNode(arr[0], null);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = new ListNode(arr[i], null);
    arr[i - 1].next = arr[i];
  }
  arr[arr.length - 1].next = arr[0];
  let p = arr[0];
  while (p) {
    count++;
    if (count === 3) {
      count = 0;
      p.value = p.next.value;
      p.next = p.next.next;
    }
    if (p.value === p.next.next.value) {
      return p.next.value;
    }
    p = p.next;
  }
}

console.log(num([1, 2, 3, 4, 5, 6, 7, 8]));
