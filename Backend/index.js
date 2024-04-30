const express = require("express");
const Connect = require("./Comman/connection");
const router = require("./Routes/UserRoute");
const cors = require('cors')

const app = express();
app.use(express.json());
Connect();
const port = 5000;
app.use(cors())
app.use(router);

app.listen(port, () => {
  console.log("Server is connected...:",port);
});