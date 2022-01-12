const diamond = (num: number) => {
  // let n = 5;
  let output = '';
  // Upside pyramid
  for (let i: number = 1; i <= num; i++) {
    // printing spaces
    for (let j: number = num; j > i; j--) {
      output += ' ';
    }
    // printing star
    for (let k: number = 0; k < (i * 2) - 1; k++) {
      output += '*';
    }
    output += '\n';
  }
  // downside pyramid
  for (let i: number = 1; i <= num - 1; i++) {
    // printing spaces
    for (let j: number = 0; j < i; j++) {
      output += ' ';
    }
    // printing star
    for (let k: number = ((num - i) * 2) - 1; k > 0; k--) {
      output += '*';
    }
    output += '\n';
  }
  console.log(output);
};
// const size = process.argv[2];

// let a=Number(size)

export default diamond;