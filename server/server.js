const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const routesStud = require("./routes/student_route")

mongoose.connect('mongodb://localhost:27017/student')

//middleware
app.use(express.json())
app.use(cors())
app.use('/student',routesStud)

app.listen(5000,()=>{
    console.log("Server is running =====>");
})
