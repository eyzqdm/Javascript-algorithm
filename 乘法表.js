let str = "";

for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    str =
      j === i
        ? str + i + "*" + j + "=" + i * j + " \n"
        : str + i + "*" + j + "=" + i * j + " ";
  }
}

console.log(str);
