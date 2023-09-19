const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000; // .env file content

const cors = require("cors");

// Connecting to Mongodb
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Declaring routes
app.use("/blogs", require("./routes/blogRoute"));

app.listen(port, () => console.log(`Server started on port ${port}`));
