const express = require('express')
const Connect = require('../Backend/Comman/connection')
// const cors = require('cors');
const router = require('./Routes/UserRoute');

const app = express();
app.use(express.json());

const port = 5000
Connect();
// app.use(cors())
app.use(router);

app.listen(port,()=>{
    console.log("port is connected on",port)
})