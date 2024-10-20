const mongoose= require('mongoose');
const express = require('express');
const cors = require('cors');
const studRoute = require('./route/studentRouter');

const app = express();

mongoose.connect("mongodb://localhost:27017/student");

//middleware
app.use(express.json());
app.use(cors());
app.use('/student',studRoute);

app.listen(5000,() => {
    console.log("Server is Started======>");
})