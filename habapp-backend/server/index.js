const express = require("express");
const dotenv = require('dotenv');
const connectDB = require('./config/database')
const PORT = process.env.PORT || 3001;
const colors = require('colors')

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get("/api", (req, res) => {
    res.json({ message: "Hello world! (from server)" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});