const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/profile", (req, res) => {
  res.send("hey");
});

app.put("/post", (req, res) => {
  res.send("hey");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
