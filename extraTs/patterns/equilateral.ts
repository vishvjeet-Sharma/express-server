const equilateral = (num: number) => {
  let output = '';
  for (let i: number = 1; i <= num; i++) {
    for (let s: number = num - 1; s >= i; s--) {
      output += ' ';
    }
    for (let h: number = 1; h <= i; h++) {
      output += ' *';
    }
    output += '\n';
  }
  console.log(output);
};
// const size = process.argv[2];
// let a=Number(size);

export default equilateral;