function repeat(str, n) {
  if (n === 1) return str;
  else return str + `${repeat(str, n - 1)}`;
}

console.log(repeat('str',3))
