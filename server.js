const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/blogs", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
