const express = require("express");
const app = express();
const path  = require('path');
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
app.use(express.json());
const _dirname = path.resolve()
const Posts = require("./routes/Posts");
app.use(cors());
app.use("/api/v1" , Posts);

// app.all('/',(req,res)=>{
//     res.send("hello");
// })

const connectDB = require('./config/database');
connectDB();
app.use(express.static(path.join(_dirname,"/frontend/build")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","build","index.html"))
})
app.listen(PORT,(req,res) => {
    console.log(`App is running successfully on port number ${PORT}`);
})

 
