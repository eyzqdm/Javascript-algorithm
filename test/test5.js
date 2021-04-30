/*打折的日期 
 */
function test(arr1, arr2) {
  const obj = new Map();

  arr2.forEach((i) => {
    obj.set(i.num, i.data);
  });
  arr1.forEach((i,index,arr) => {
    if (obj.has(i.num)) {
      arr[index].data = obj.get(i.num);
    } else {
      arr[index].data = "--";
    }
  });
  return arr1;
}

const arr1 = [
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
  { num: 7 },
  { num: 8 },
  { num: 9 },
];
const arr2 = [
  { num: 3, data: "a" },
  { num: 7, data: "b" },
  { num: 8, data: "c" },
];

console.log(test(arr1, arr2));
