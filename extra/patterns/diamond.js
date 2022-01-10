const diamond = (n) => {
  // let n = 5;
  let output = '';
  // Upside pyramid
  for (let i = 1; i <= n; i += 1) {
    // printing spaces
    for (let j = n; j > i; j -= 1) {
      output += ' ';
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k += 1) {
      output += '*';
    }
    output += '\n';
  }
  // downside pyramid
  for (let i = 1; i <= n - 1; i += 1) {
    // printing spaces
    for (let j = 0; j < i; j += 1) {
      output += ' ';
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k > 0; k -= 1) {
      output += '*';
    }
    output += '\n';
  }
  console.log(output);
};
// const size = process.argv[2];

// let a=Number(size)

export default diamond;
