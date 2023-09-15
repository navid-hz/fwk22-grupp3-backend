const express = require("express");
const dotenv = require("dotenv");

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
