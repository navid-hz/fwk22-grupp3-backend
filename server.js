const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const port = process.env.PORT || 5000;

dotenv.config();

// Connecting to Mongodb
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/blogs", require("./routes/blogRoute"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
