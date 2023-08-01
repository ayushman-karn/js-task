let fs = require("fs");
//The data file contains 200 words
fs.readFile("data.txt", "utf-8", (err, data) =>
  console.log(data.split(" ").reduce((acc, curr) => acc + 1, 0))
);
