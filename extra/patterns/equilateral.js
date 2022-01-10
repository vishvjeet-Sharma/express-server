const equilateral = (n) => {
  let output = '';
  for (let i = 1; i <= n; i += 1) {
    for (let s = n - 1; s >= i; s -= 1) {
      output += ' ';
    }
    for (let h = 1; h <= i; h += 1) {
      output += ' *';
    }
    output += '\n';
  }
  console.log(output);
};
// const size = process.argv[2];
// let a=Number(size);

export default equilateral;
