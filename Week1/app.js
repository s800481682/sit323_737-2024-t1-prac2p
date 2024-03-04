const express = require("express");
const res = require("express/lib/response");
const app = express();

// addTwoNumber will take two numbers and return their sum
const addTwoNumber = (n1, n2) => {
  return n1 + n2;
};

// The "Addition" endpoint
app.get("/addTwoNumber", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const result = addTwoNumber(n1, n2);
  res.json({ statuscode: 200, data: result });
});

// The "Hello Word" endpoint
app.get("/", function (req, res) {
  res.send("hello world");
});

// Rando code
console.log(addTwoNumber(19, 12));

// Listen!
const port = 3040;
app.listen(port, () => {
  console.log("hello i'm listening to port" + port);
});
