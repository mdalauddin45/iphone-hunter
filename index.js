const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("look hlw Iphone server runing!");
});
app.listen(port, () => {
  console.log(`iphone server on runing on port ${port}!`);
});
