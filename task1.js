const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.listen("3000", () => {
  console.log("Listening on port 3000");
});

//Use the below mentioned code if you want to respond hello world! to only get requests

// app.get("/", (req, res) => {
//   res.send({ status: "Hello, World!" });
// });

//While use this code if you want to respond hello world! regardless the type of request made

app.use("/", (req, res, next) => {
  res.send({ status: "Hello, World!" });
  next();
});
