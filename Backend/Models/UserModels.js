const mongoose = require("mongoose");
const User = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  emailid: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String },
});
const UserDB = mongoose.model('SeaIndia', User);

module.exports = UserDB;
