const express = require("express");
const dotenv = require('dotenv');
//const connectDB = require('./config/database')
const PORT = process.env.PORT || 3001;
//const colors = require('colors')
const path = require('path')
dotenv.config()

//connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get("/api/habits", (req, res) => {
    res.json({ message: "Hello world! (from server)" });
  });

app.use('/api/habits', require(path.join(__dirname,'habitRoutes','getRoute')));
app.use('/api/habits', require(path.join(__dirname,'habitRoutes','createRoute')));
app.use('/api/habits', require(path.join(__dirname,'habitRoutes','updateRoute')));
app.use('/api/habits', require(path.join(__dirname,'habitRoutes','deleteRoute')));


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});