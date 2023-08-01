let fs = require("fs");
fs.readFile("data.txt", "utf-8", (err, data) =>
  console.log(data.split(" ").reduce((acc, curr) => acc + 1, 0))
);
