const express = require("express");
const dotenv = require('dotenv');
const connectDB = require('../config/database');
const PORT = process.env.PORT || 3001;
const colors = require('colors')
const path = require('path')
dotenv.config()

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/habits', require('../routes/habitRoutes'));1

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});