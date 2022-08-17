const express = require("express");
const app = express();

// basic route
app.get("/home", (req, res) => {
  res.send("Backend express server");
});

app.listen(1337, () => {
  console.log("server running on port 1337");
});
