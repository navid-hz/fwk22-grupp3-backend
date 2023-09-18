const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connecting to Mongodb
connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/blogs", require("./routes/blogRoute"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
