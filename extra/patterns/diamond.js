const diamond = (n) => {
    // let n = 5;
    let output = "";
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        output += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        output += "*";
      }
      output += "\n";
    }
    // downside pyramid
    for (let i = 1; i <= n - 1; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        output += " ";
      }
      // printing star
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        output += "*";
      }
      output += "\n";
    }
    console.log(output);
  };
  const size = process.argv[2];
  
  let a=Number(size)
  
  diamond(10);