const equilateral = (n) => {
  let output = '';
  for (let i = 1; i <= n; i++) {
    for (let s = n - 1; s >= i; s--) {
      output += ' ';
    }
    for (let h = 1; h <= i; h++) {
      output += ' *'
    }
    output += "\n";
  }
  console.log(output);
}
const size = process.argv[2];
let a=Number(size);

export default equilateral;