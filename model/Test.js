const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Test = new Schema({
  name: String,
});


const UserSchema = mongoose.model("Test", Test);
module.exports = UserSchema;
//test
