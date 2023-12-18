const express = require("express");
const port = 8000;
const app = express();
app.get("/", (req, res) => {
  res.send("sad");
});
app.listen(port, () => {
  console.log("hi");
});
