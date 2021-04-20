function add(n) {
  return n > 0 ? n + add(n - 1) : n;
}
console.log(add(5));
