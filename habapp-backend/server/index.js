const express = require("express");
const dotenv = require('dotenv');
//const connectDB = require('./config/database')
const PORT = process.env.PORT || 3001;
const colors = require('colors')
const path = require('path')
dotenv.config()

//connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//app.get("/api/habits", (req, res) => {                    //<---is this necessary??
//    res.json({ message: "Hello world! (from server)" });
//  });

app.use('/api/habits', require('../habitRoutes/getRoute'));
app.use('/api/habits', require('../habitRoutes/createRoute'));
app.use('/api/habits', require('../habitRoutes/updateRoute'));
app.use('/api/habits', require('../habitRoutes/deleteRoute'));


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});