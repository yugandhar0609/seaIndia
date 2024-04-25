const mongoose = require('mongoose')
const Mongo_Url = "mongodb+srv://yugandharselvam:oBMopBiJiP6aFUBu@seaindia.rgzhgce.mongodb.net/"

const Connect = () => {
    mongoose.connect(Mongo_Url)
    .then(()=>{console.log("Mongoose is connected....");})
    .catch((err)=>{console.log("connection error:",err.message);})
} 

module.exports = Connect;