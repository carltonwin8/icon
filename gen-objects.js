const fs = require("fs");

const lines = () => {
  result = [];
  for (i = 128; i < 1024; i += 128) {
    result.push(
      `<path d="M ${i} 0, V1024" stroke="black" stroke-width="2px" />`
    );
    result.push(
      `<path d="M 0 ${i}, H1024" stroke="black" stroke-width="2px" />`
    );
  }
  return result.join("\n");
};

const main = () => {
  fs.writeFileSync("line.svg", lines());
};

main();
