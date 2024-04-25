const express = require('express')
const Connect = require('../Backend/Comman/connection')
const cors = require('cors');
const router = require('./Routes/UserRoute');

const app = express();
app.use(express.json());
Connect();
const port = 5000
app.use(cors())
app.use(router);

app.listen(port,()=>{
    console.log("port is connected.....",port)
})